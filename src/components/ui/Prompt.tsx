"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PromptProps = {
  glyph?: "$" | ">" | "~" | "*";
  command?: string;
  children?: ReactNode;
  className?: string;
  output?: ReactNode;
  caret?: boolean;
};

export default function Prompt({
  glyph = "$",
  command,
  children,
  className,
  output,
  caret = false,
}: PromptProps) {
  return (
    <div className={cn("font-mono text-sm", className)}>
      <div className="flex items-baseline gap-2">
        <span className="term-prompt-prefix select-none">{glyph}</span>
        {command && (
          <span className="text-bone-100">
            {command}
            {caret && (
              <span
                className="text-lime-400 inline-block ml-0.5 align-baseline"
                style={{ animation: "blink 1s steps(2) infinite" }}
              >
                ▌
              </span>
            )}
          </span>
        )}
        {!command && children}
      </div>
      {output && (
        <div className="pl-4 mt-1 text-bone-300 leading-relaxed">{output}</div>
      )}
    </div>
  );
}
