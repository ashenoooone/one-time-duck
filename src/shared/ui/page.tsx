import { cn } from "@/shared/utils/cn.ts";
import React, { ReactNode } from "react";

type PageProps = {
  className?: string;
  children?: ReactNode;
};

export const Page = React.memo((props: PageProps) => {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "flex flex-col px-4 overflow-y-auto pt-4 pb-navbar max-w-mx-container mx-auto items-center w-full",
        className
      )}
    >
      {children}
    </div>
  );
});

Page.displayName = "Page";
