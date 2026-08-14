"use client";

import * as React from "react";
import { ArrowDown01Icon, Menu11Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { usePathname } from "next/navigation";

import { AsideLink } from "~/components/aside-link";
import { exampleHref, examplesConfig } from "~/config/examples";
import { cn } from "~/lib/utils";

const NavbarMobileContext = React.createContext<{
  isOpen: boolean;
  toggle: () => void;
} | null>(null);

export function NavbarMobileProvider({ children }: React.PropsWithChildren) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = React.useCallback(() => setIsOpen((open) => !open), []);

  return <NavbarMobileContext value={{ isOpen, toggle }}>{children}</NavbarMobileContext>;
}

function useNavbarMobile() {
  const context = React.useContext(NavbarMobileContext);
  if (!context) throw new Error("NavbarMobile must be used within its provider");
  return context;
}

export function NavbarMobileButton() {
  const { toggle } = useNavbarMobile();
  return (
    <button className="block overflow-hidden outline-none md:hidden" onClick={toggle} type="button">
      <HugeiconsIcon className="size-4" icon={Menu11Icon} strokeWidth={1.5} />
    </button>
  );
}

export function NavbarMobile() {
  const pathname = usePathname();
  const { isOpen, toggle } = useNavbarMobile();
  const [openSections, setOpenSections] = React.useState<Set<number>>(() => {
    const index = examplesConfig.contents.findIndex((section) =>
      section.list.some((item) => exampleHref(item.href) === pathname),
    );
    return index < 0 ? new Set() : new Set([index]);
  });

  return (
    <div
      className={cn(
        "bg-background fixed inset-x-0 top-16 z-100 grid grid-rows-[0fr] transition-all duration-300 md:hidden",
        isOpen && "grid-rows-[1fr] border-b shadow-lg",
      )}
    >
      <div
        className={cn(
          "no-scrollbar flex max-h-[80vh] min-h-0 flex-col overflow-y-auto text-sm mask-[linear-gradient(to_top,transparent,white_40px)] transition-all duration-300",
          isOpen ? "pb-4" : "invisible",
        )}
      >
        <div className="flex flex-col divide-y">
          {examplesConfig.contents.map((section, index) => {
            const open = openSections.has(index);
            return (
              <div className="px-6 py-4" key={section.title}>
                <button
                  className="flex w-full items-center text-start hover:underline"
                  onClick={() =>
                    setOpenSections((previous) => {
                      const next = new Set(previous);
                      open ? next.delete(index) : next.add(index);
                      return next;
                    })
                  }
                  type="button"
                >
                  <span className="grow">{section.title}</span>
                  <HugeiconsIcon
                    className={cn("size-4 transition-transform duration-300", open && "rotate-180")}
                    icon={ArrowDown01Icon}
                    strokeWidth={1.5}
                  />
                </button>
                {open && (
                  <div className="flex flex-col gap-2.5 px-4 pt-4">
                    {section.list.map((item) => (
                      <AsideLink href={exampleHref(item.href)} key={item.href} onClick={toggle}>
                        {item.title}
                      </AsideLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
