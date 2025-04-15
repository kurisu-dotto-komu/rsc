import { ComponentProps } from "react";

import { Code as BrightCode, BrightProps } from "bright";
import clsx from "clsx";

import { Tab } from "./tab";

type BrightCodeProps = ComponentProps<typeof BrightCode>;

const darkTheme = "dracula";
const lightTheme = "github-light";
const defaultTheme = darkTheme;

const styleOverrides = {
  borderRadius: "none",
  margin: "0",
};

export default function Code({
  lang,
  light,
  code,
  children,
  inline,
  label,
  labelRight,
  className,
  ...props
}: BrightCodeProps & {
  light?: boolean;
  inline?: boolean;
  className?: string;
  label?: string;
  labelRight?: string;
}) {
  // const
  return (
    <div>
      {(label || labelRight) && (
        <div className="mx-2 flex items-center select-none">
          {label && <Tab>{label}</Tab>}
          {labelRight && <Tab className="ml-auto">{labelRight}</Tab>}
        </div>
      )}
      <BrightCode
        lang={lang ?? "tsx"}
        theme={light ? lightTheme : defaultTheme}
        {...props}
        className={clsx(
          "not-prose rounded-lg",
          inline ? "inline-block" : "",
          light && "border-1 border-gray-200",
          className,
        )}
        style={inline ? { ...styleOverrides, display: "inline-block" } : styleOverrides}
        extensions={
          inline
            ? [
                {
                  name: "pre",
                  Pre: (props: BrightProps) => (
                    <div className="[&>pre]:!rounded-none [&>pre]:!py-1">
                      {/* @ts-ignore - BrightCode.Pre works at runtime despite type error */}
                      <BrightCode.Pre {...props} />
                    </div>
                  ),
                },
              ]
            : []
        }
      >
        {children ?? code?.trim()}
      </BrightCode>
    </div>
  );
}

// included only for reference

export const themes = [
  "dark-plus",
  "dracula-soft",
  "dracula",
  "github-dark",
  "github-dark-dimmed",
  // "github-from-css",
  "github-light",
  "light-plus",
  "material-darker",
  "material-default",
  // "material-from-css",
  "material-lighter",
  "material-ocean",
  "material-palenight",
  "min-dark",
  "min-light",
  "monokai",
  "nord",
  "one-dark-pro",
  "poimandres",
  "slack-dark",
  "slack-ochin",
  "solarized-dark",
  "solarized-light",
] as const;

const languages = [
  "abap",
  "actionscript-3",
  "ada",
  "angular-html",
  "angular-ts",
  "apache",
  "apex",
  "apl",
  "applescript",
  "ara",
  "asciidoc",
  "asm",
  "astro",
  "awk",
  "ballerina",
  "bat",
  "beancount",
  "berry",
  "bibtex",
  "bicep",
  "blade",
  "bsl",
  "c",
  "cadence",
  "cairo",
  "clarity",
  "clojure",
  "cmake",
  "cobol",
  "codeowners",
  "codeql",
  "coffee",
  "common-lisp",
  "coq",
  "cpp",
  "crystal",
  "csharp",
  "css",
  "csv",
  "cue",
  "cypher",
  "d",
  "dart",
  "dax",
  "desktop",
  "diff",
  "docker",
  "dotenv",
  "dream-maker",
  "edge",
  "elixir",
  "elm",
  "emacs-lisp",
  "erb",
  "erlang",
  "fennel",
  "fish",
  "fluent",
  "fortran-fixed-form",
  "fortran-free-form",
  "fsharp",
  "gdresource",
  "gdscript",
  "gdshader",
  "genie",
  "gherkin",
  "git-commit",
  "git-rebase",
  "gleam",
  "glimmer-js",
  "glimmer-ts",
  "glsl",
  "gnuplot",
  "go",
  "graphql",
  "groovy",
  "hack",
  "haml",
  "handlebars",
  "haskell",
  "haxe",
  "hcl",
  "hjson",
  "hlsl",
  "html",
  "html-derivative",
  "http",
  "hxml",
  "hy",
  "imba",
  "ini",
  "java",
  "javascript",
  "jinja",
  "jison",
  "json",
  "json5",
  "jsonc",
  "jsonl",
  "jsonnet",
  "jssm",
  "jsx",
  "julia",
  "kotlin",
  "kusto",
  "latex",
  "lean",
  "less",
  "liquid",
  "log",
  "logo",
  "lua",
  "luau",
  "make",
  "markdown",
  "marko",
  "matlab",
  "mdc",
  "mdx",
  "mermaid",
  "mipsasm",
  "mojo",
  "move",
  "narrat",
  "nextflow",
  "nginx",
  "nim",
  "nix",
  "nushell",
  "objective-c",
  "objective-cpp",
  "ocaml",
  "pascal",
  "perl",
  "php",
  "plsql",
  "po",
  "polar",
  "postcss",
  "powerquery",
  "powershell",
  "prisma",
  "prolog",
  "proto",
  "pug",
  "puppet",
  "purescript",
  "python",
  "qml",
  "qmldir",
  "qss",
  "r",
  "racket",
  "raku",
  "razor",
  "reg",
  "regexp",
  "rel",
  "riscv",
  "rst",
  "ruby",
  "rust",
  "sas",
  "sass",
  "scala",
  "scheme",
  "scss",
  "sdbl",
  "shaderlab",
  "shellscript",
  "shellsession",
  "smalltalk",
  "solidity",
  "soy",
  "sparql",
  "splunk",
  "sql",
  "ssh-config",
  "stata",
  "stylus",
  "svelte",
  "swift",
  "system-verilog",
  "systemd",
  "talonscript",
  "tasl",
  "tcl",
  "templ",
  "terraform",
  "tex",
  "toml",
  "ts-tags",
  "tsv",
  "tsx",
  "turtle",
  "twig",
  "txt",
  "typescript",
  "typespec",
  "typst",
  "v",
  "vala",
  "vb",
  "verilog",
  "vhdl",
  "viml",
  "vue",
  "vue-html",
  "vyper",
  "wasm",
  "wenyan",
  "wgsl",
  "wikitext",
  "wolfram",
  "xml",
  "xsl",
  "yaml",
  "zenscript",
  "zig",
];
