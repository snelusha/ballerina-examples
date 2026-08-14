import Link from "next/link";
import { examplesConfig, exampleHref } from "~/config/examples";

export default function Page() {
  const columns: (typeof examplesConfig.contents)[number][][] = [[], [], []];

  for (const [index, section] of examplesConfig.contents.entries()) {
    columns[index % columns.length].push(section);
  }

  return (
    <main className="min-h-dvh pt-16 md:ml-67 lg:ml-71.5">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-3xl font-medium">Ballerina by Example</h1>
          <p className="text-muted-foreground mt-2">
            Ballerina by Example enables you to have complete coverage over the language, while
            emphasizing incremental learning. This is a series of commented example programs.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {columns.map((sections, index) => (
            <div className="flex flex-col gap-10" key={index}>
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-3 text-lg font-medium">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.list.map((example) => (
                      <li key={example.href}>
                        <Link
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          href={exampleHref(example.href)}
                        >
                          {example.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
