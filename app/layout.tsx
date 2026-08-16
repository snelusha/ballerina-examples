import "~/app/globals.css";

import localFont from "next/font/local";
import { BallerinaProvider } from "~/components/ballerina-provider";
import { Navbar } from "~/components/nav-bar";
import { NavbarMobileProvider } from "~/components/nav-mobile";
import { Sidebar } from "~/components/side-bar";
import { cn } from "~/lib/utils";

import type { Metadata, Viewport } from "next";

const callingCode = localFont({
  src: "./fonts/calling-code.woff2",
  variable: "--font-calling-code",
});

const iosevka = localFont({
  src: "./fonts/Iosevka-Regular.ttf",
  variable: "--font-iosevka",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Ballerina by Example",
    default: "Ballerina by Example",
  },
  description:
    "Ballerina by Example enables you to have complete coverage over the language, while emphasizing incremental learning. This is a series of commented example programs.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(callingCode.variable, iosevka.variable, "h-full antialiased", "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <BallerinaProvider>
          <NavbarMobileProvider>
            <Navbar />
            <Sidebar />
            {children}
          </NavbarMobileProvider>
        </BallerinaProvider>
      </body>
    </html>
  );
}
