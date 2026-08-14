"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

import type * as React from "react";

export function AsideLink({
  className,
  href,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href"> & { href: string }) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        "text-muted-foreground hover:text-foreground data-active:text-foreground flex w-full items-center gap-2 transition-colors",
        className,
      )}
      data-active={pathname === href || undefined}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
