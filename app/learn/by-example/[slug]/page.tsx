import { allExamples } from "content-collections";
import { notFound } from "next/navigation";
import { MDXContent } from "~/components/mdx-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const example = allExamples.find((example) => example.slug === slug);
  if (!example) return notFound();

  return {
    title: example.title,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const example = allExamples.find((example) => example.slug === slug);
  if (!example) return notFound();

  return (
    <main className="min-h-dvh pt-16 md:ml-67 lg:ml-71.5">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-medium">{example.title}</h1>
        <MDXContent source={example.content} />
      </div>
    </main>
  );
}
