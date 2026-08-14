"use client";

import { Fragment, useEffect, useRef, useState } from "react";

import type { BundledLanguage, BundledTheme } from "shiki/bundle/full";

type ShikiToken = {
  color?: string;
  content: string;
};

export interface HighlightedCodeProps {
  source: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
}

export function HighlightedCode({ source, lang, theme = "github-light" }: HighlightedCodeProps) {
  const [tokens, setTokens] = useState<ShikiToken[][] | null>(null);

  const shikiRef = useRef<Promise<typeof import("shiki/bundle/full")> | null>(null);

  useEffect(() => {
    let cancelled = false;

    setTokens(null);

    if (!shikiRef.current) shikiRef.current = import("shiki/bundle/full");

    shikiRef.current
      .then(({ codeToTokens }) => codeToTokens(source, { lang, theme }))
      .then((result) => !cancelled && setTokens(result.tokens));

    return () => {
      cancelled = true;
    };
  }, [source, lang, theme]);

  if (!tokens) return source;

  return tokens.map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {line.map((token, tokenIndex) => (
        <span key={tokenIndex} style={{ color: token.color }}>
          {token.content}
        </span>
      ))}
      {lineIndex < tokens.length - 1 && "\n"}
    </Fragment>
  ));
}
