import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full placeholder:text-[var(--muted-foreground)]",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
