import React, { CSSProperties } from "react";

import { max, scaleBand, scaleLinear } from "d3";

import Spinner from "#/components/spinner";

import { TooltipTrigger } from "./tooltip";
import { TooltipContent } from "./tooltip";
import { ClientTooltip } from "./tooltip";

export default function BarChart({ data }: { data?: { key: string; value: number }[] }) {
  if (!data) return <Spinner />;

  // Scales
  const yScale = scaleBand()
    .domain(data.map((d) => d.key))
    .range([0, 100])
    .padding(0.175);

  const xScale = scaleLinear()
    .domain([0, max(data.map((d) => d.value)) ?? 0])
    .range([0, 100]);

  const longestWord = max(data.map((d) => d.key.length)) || 1;
  return (
    <div
      className="relative h-72 w-full"
      style={
        {
          "--marginTop": "0px",
          "--marginRight": "0px",
          "--marginBottom": "16px",
          "--marginLeft": `${longestWord * 7}px`,
        } as CSSProperties
      }
    >
      {/* Chart Area */}
      <div className="absolute inset-0 z-10 h-[calc(100%-var(--marginTop)-var(--marginBottom))] w-[calc(100%-var(--marginLeft)-var(--marginRight))] translate-x-[var(--marginLeft)] translate-y-[var(--marginTop)] overflow-visible">
        {/* Bars with Rounded Right Corners */}
        {data.map((d, index) => {
          const barWidth = xScale(d.value);
          const barHeight = yScale.bandwidth();

          return (
            <ClientTooltip key={index}>
              <TooltipTrigger>
                <div
                  style={{
                    position: "absolute",
                    left: "0",
                    top: `${yScale(d.key)}%`,
                    width: `${barWidth}%`,
                    height: `${barHeight}%`,
                    borderRadius: "0 6px 6px 0",
                  }}
                  className="bg-gradient-to-b from-purple-400 to-purple-600 shadow-inner hover:from-purple-600 hover:to-purple-800"
                />
              </TooltipTrigger>
              <TooltipContent>
                <div>{d.key}</div>
                <div className="text-sm text-gray-800">{Math.round(d.value)}</div>
              </TooltipContent>
            </ClientTooltip>
          );
        })}
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          {xScale
            .ticks(8)
            .map(xScale.tickFormat(8, "d"))
            .map((active, i) => (
              <g transform={`translate(${xScale(+active)},0)`} className="text-gray-800/80" key={i}>
                <line
                  y1={0}
                  y2={100}
                  stroke="currentColor"
                  strokeDasharray="6,5"
                  strokeWidth={0.5}
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            ))}
        </svg>
        {/* X Axis (Values) */}
        {xScale.ticks(4).map((value, i) => (
          <div
            key={i}
            style={{
              left: `${xScale(value)}%`,
              top: "100%",
            }}
            className="absolute -translate-x-1/2 text-xs text-gray-800 tabular-nums"
          >
            {value}
          </div>
        ))}
      </div>

      {/* Y Axis (Letters) */}
      <div className="h-[calc(100%-var(--marginTop)-var(--marginBottom))] w-[var(--marginLeft)] translate-y-[var(--marginTop)] overflow-visible">
        {data.map((entry, i) => (
          <span
            key={i}
            style={{
              left: "-8px",
              top: `${yScale(entry.key)! + yScale.bandwidth() / 2}%`,
            }}
            className="absolute w-full -translate-y-1/2 text-right text-xs text-gray-800"
          >
            {entry.key}
          </span>
        ))}
      </div>
    </div>
  );
}
