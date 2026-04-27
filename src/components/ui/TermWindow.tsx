"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TermWindowProps = {
  title?: string;
  subtitle?: string;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
  showDots?: boolean;
  glow?: boolean;
};

export default function TermWindow({
  title,
  subtitle,
  className,
  bodyClassName,
  children,
  showDots = true,
  glow = false,
}: TermWindowProps) {
  return (
    <div
      className={cn(
        "term-window overflow-hidden",
        glow && "ring-1 ring-lime-400/15",
        className,
      )}
    >
      <div className="term-window-header">
        {showDots && (
          <div className="flex items-center gap-1.5 mr-2">
            <span className="term-dot bg-signal-rose/70" />
            <span className="term-dot bg-signal-amber/70" />
            <span className="term-dot bg-lime-400/70" />
          </div>
        )}
        <span className="text-[11px] text-bone-400 font-mono truncate">
          {title ?? "shailesh@zykrr:~"}
        </span>
        {subtitle && (
          <span className="ml-auto text-[11px] text-ink-500 font-mono truncate">
            {subtitle}
          </span>
        )}
      </div>
      <div className={cn("p-5 sm:p-6 font-mono", bodyClassName)}>{children}</div>
    </div>
  );
}
