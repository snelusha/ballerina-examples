"use client";

import { ListRestartIcon, PlayIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useBallerina } from "@snelusha/balrun/react";
import { useEffect, useRef, useState } from "react";
import { useBallerinaFiles } from "~/components/ballerina-provider";
import { HighlightedCode } from "~/components/highlighted-code";
import { Button } from "~/components/ui/button";

export interface BallerinaCodeBlockProps {
  filePath: string;
  initialCommand: string;
  initialOutput: string;
  source: string;
}

function lineCount(value: string) {
  return Math.max(1, value.split("\n").length);
}

function withoutTrailingNewline(value: string) {
  return value.replace(/\r?\n$/, "");
}

export function BallerinaCodeBlock({
  filePath,
  initialCommand,
  initialOutput,
  source: initialSource,
}: BallerinaCodeBlockProps) {
  const [source, setSource] = useState(initialSource);
  const [output, setOutput] = useState(initialOutput);
  const [isRunning, setIsRunning] = useState(false);
  const [outputMinLines, setOutputMinLines] = useState(() =>
    lineCount(initialOutput),
  );
  const highlightedCode = useRef<HTMLPreElement>(null);
  const { error, isReady, run } = useBallerina();
  const displayedOutput = withoutTrailingNewline(
    error ? error.message : output,
  );

  useEffect(() => {
    setOutputMinLines((current) => Math.max(current, lineCount(displayedOutput)));
  }, [displayedOutput]);
  const { removeFile, setFile } = useBallerinaFiles();

  useEffect(() => {
    setFile(filePath, initialSource);
    return () => removeFile(filePath);
  }, [filePath, initialSource, removeFile, setFile]);

  async function handleRun() {
    setOutput("");
    setIsRunning(true);
    const writer = {
      write: (chunk: string) => setOutput((current) => current + chunk),
    };

    try {
      await run(filePath, { colors: false, stderr: writer, stdout: writer });
    } catch (runError) {
      setOutput(
        runError instanceof Error ? runError.message : String(runError),
      );
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <section className="not-typeset border my-6 overflow-hidden">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <span className="font-mono text-muted-foreground text-xs">
          {filePath}
        </span>
        {source !== initialSource && (
          <HugeiconsIcon
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            icon={ListRestartIcon}
            size={16}
            onClick={() => {
              setFile(filePath, initialSource);
              setSource(initialSource);
              setOutput(initialOutput);
            }}
          />
        )}
      </div>
      <div className="grid">
        <pre
          ref={highlightedCode}
          className="col-start-1 row-start-1 m-0 overflow-hidden px-4 py-3 font-mono text-sm leading-6 whitespace-pre"
        >
          <code>
            <HighlightedCode
              source={source}
              lang="ballerina"
              theme="github-light"
            />
          </code>
        </pre>
        <textarea
          className="col-start-1 row-start-1 block w-full min-h-full resize-none overflow-x-auto overflow-y-hidden bg-transparent px-4 py-3 font-mono text-sm leading-6 text-transparent caret-zinc-900 outline-none"
          spellCheck={false}
          wrap="off"
          value={source}
          onChange={(event) => {
            setFile(filePath, event.target.value);
            setSource(event.target.value);
          }}
          onScroll={(event) => {
            if (highlightedCode.current) {
              highlightedCode.current.scrollTop = event.currentTarget.scrollTop;
              highlightedCode.current.scrollLeft =
                event.currentTarget.scrollLeft;
            }
          }}
        />
      </div>
      <div className="border-t p-4 text-sm">
        <div className="flex items-center gap-2 font-mono leading-6">
          <span className="select-none text-muted-foreground">$</span>
          <input
            className="min-w-0 flex-1 bg-transparent outline-none"
            disabled={true}
            spellCheck={false}
            value={initialCommand}
          />
          <Button
            disabled={!isReady || isRunning}
            variant="ghost"
            onClick={handleRun}
          >
            <HugeiconsIcon icon={PlayIcon} />
            Run
          </Button>
        </div>
        <pre
          className="whitespace-pre-wrap font-mono leading-6"
          style={{ minHeight: `${outputMinLines * 1.5}rem` }}
        >
          {displayedOutput}
        </pre>
      </div>
    </section>
  );
}
