import { MDXRemote } from "next-mdx-remote-client/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import { BallerinaCodeBlock } from "~/components/ballerina-code-block";

import type { MDXRemoteProps } from "next-mdx-remote-client/rsc";
import type { Options as RehypePrettyCodeOptions } from "rehype-pretty-code";

export function MDXContent({ options, ...props }: MDXRemoteProps) {
  const opts = {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: "github-light",
            keepBackground: false,
          } satisfies RehypePrettyCodeOptions,
        ],
        rehypeSlug,
      ],
    },
    ...options,
  } satisfies MDXRemoteProps["options"];

  return (
    <article className="typeset typeset-docs">
      <MDXRemote components={{ BallerinaCodeBlock }} options={opts} {...props} />
    </article>
  );
}
