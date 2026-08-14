"use client";

import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { usePathname } from "next/navigation";
import * as React from "react";

import { AsideLink } from "~/components/aside-link";
import { exampleHref, examplesConfig } from "~/config/examples";
import { cn } from "~/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const defaultOpen = examplesConfig.contents.findIndex((section) =>
    section.list.some((item) => exampleHref(item.href) === pathname),
  );
  const [currentOpen, setCurrentOpen] = React.useState(defaultOpen === -1 ? 0 : defaultOpen);

  React.useEffect(() => {
    const index = examplesConfig.contents.findIndex((section) =>
      section.list.some((item) => exampleHref(item.href) === pathname),
    );
    if (index !== -1) setCurrentOpen(index);
  }, [pathname]);

  return (
    <div className="fixed inset-s-0 top-0">
      <aside className="absolute top-16 hidden h-dvh shrink-0 flex-col justify-between overflow-y-auto border-r pb-2 text-sm md:flex md:w-67 md:transition-all lg:w-71.5">
        <div className="flex flex-col">
          {examplesConfig.contents.map((section, index) => {
            const open = currentOpen === index;
            return (
              <div key={section.title}>
                <button
                  className="flex w-full items-center gap-2 border-b px-5 py-2.5 text-start hover:underline"
                  onClick={() => setCurrentOpen(open ? -1 : index)}
                  type="button"
                >
                  <span className="grow">{section.title}</span>
                  <HugeiconsIcon
                    className={cn(
                      "size-4 shrink-0 transition-transform duration-300",
                      open && "rotate-180",
                    )}
                    icon={ArrowDown01Icon}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    {section.list.map((item) => (
                      <AsideLink className="px-5 py-2.5" href={exampleHref(item.href)} key={item.href}>
                        {item.title}
                      </AsideLink>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
