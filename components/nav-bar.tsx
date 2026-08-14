import Link from "next/link";

// import { Logo } from "~/components/logo";
import { NavbarMobile, NavbarMobileButton } from "~/components/nav-mobile";

export function Navbar() {
  return (
    <div className="bg-background/90 fixed inset-x-0 top-0 z-50 flex flex-col backdrop-blur-md">
      <nav className="top-0 flex h-16 grid-cols-12 items-center justify-between md:grid md:border-b">
        <div className="flex h-full shrink-0 items-center px-6 md:col-span-2 md:w-67 md:border-r lg:w-71.5">
          <Link className="text-muted-foreground text-lg" href="/">
            <div className="flex items-center gap-2.5 font-medium">
              {/* <Logo className="text-foreground w-6" /> */}
              <span>
                ballerina/<span className="text-foreground">examples</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="relative flex w-full items-center justify-end px-6 md:col-span-10">
          <NavbarMobileButton />
        </div>
      </nav>
      <NavbarMobile />
    </div>
  );
}
