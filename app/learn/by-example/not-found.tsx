import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center justify-center pt-16 md:ml-67 lg:ml-71.5">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-lg font-medium">Not found</h1>
        <Link
          className="text-muted-foreground hover:text-foreground transition-colors"
          href="/learn/by-example"
        >
          cd ~/examples
        </Link>
      </div>
    </main>
  );
}
