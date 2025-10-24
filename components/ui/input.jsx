import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full placeholder:text-[var(--muted-foreground)]",
        className
      )}
      {...props}
    />
  );
}

export { Input };
