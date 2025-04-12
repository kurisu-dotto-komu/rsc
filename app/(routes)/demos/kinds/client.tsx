"use client";

import { useEffect, useState } from "react";

import Border from "#/components/border";
import Counter from "#/components/counter";

type SystemInfo = {
  os?: string;
  battery?: string;
};

const getPlatformInfo = async (): Promise<string> => {
  try {
    // @ts-ignore
    return navigator.userAgentData.platform;
  } catch {
    return "unknown";
  }
};

const getBatteryInfo = async (): Promise<string> => {
  try {
    // @ts-ignore
    const battery = await navigator.getBattery();
    return `${Math.round(battery.level * 100)}% (${battery.charging ? "charging" : "not charging"})`;
  } catch {
    return "unknown";
  }
};

export default function Client() {
  const [{ os, battery } = {}, setSystemInfo] = useState<SystemInfo>({});

  // useEffect will only render once we're mounted on the client.
  useEffect(() => {
    (async () => {
      setSystemInfo({ os: await getPlatformInfo(), battery: await getBatteryInfo() });
    })();
  }, []);

  return (
    <Border client name="Client">
      <div className="prose max-w-none">
        <p>
          I am client client component. I have the <code>&quot;use client&quot;</code> directive at
          the top of my file.
        </p>
        <p>
          Look, ma, I can count:{" "}
          <b>
            <Counter />
          </b>
        </p>
        <p>
          Your operating system is: <b>{os || "loading..."}</b>
        </p>
        <p>
          Your battery status is: <b>{battery || "loading..."}</b>
        </p>
      </div>
    </Border>
  );
}
