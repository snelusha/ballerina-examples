"use client";

import type { DirEntry, FS, OpenResult, StatResult } from "@snelusha/balrun";
import { BallerinaProvider as BalrunBallerinaProvider } from "@snelusha/balrun/react";

import type { PropsWithChildren } from "react";
import { createContext, useCallback, useContext, useMemo, useRef } from "react";

type BallerinaFilesContextValue = {
  setFile: (path: string, content: string) => void;
  removeFile: (path: string) => void;
};

const BallerinaFilesContext = createContext<BallerinaFilesContextValue | null>(
  null,
);

export function BallerinaProvider({ children }: PropsWithChildren) {
  const files = useRef(new Map<string, string>());

  const fs = useMemo(
    () =>
      ({
        async open(path: string): Promise<OpenResult | null> {
          const content = files.current.get(path);
          return content == null
            ? null
            : { content, size: content.length, modTime: 0, isDir: false };
        },
        async stat(path: string): Promise<StatResult | null> {
          if (path === ".") {
            return { name: path, size: 0, modTime: 0, isDir: true };
          }
          const content = files.current.get(path);
          return content == null
            ? null
            : { name: path, size: content.length, modTime: 0, isDir: false };
        },
        async readDir(path: string): Promise<DirEntry[] | null> {
          if (path !== ".") return null;
          return [...files.current.keys()].map((name) => ({
            name,
            isDir: false,
          }));
        },
        async writeFile(): Promise<boolean> {
          return false;
        },
        async remove(): Promise<boolean> {
          return false;
        },
        async move(): Promise<boolean> {
          return false;
        },
        async mkdirAll(): Promise<boolean> {
          return false;
        },
      }) satisfies FS,
    [],
  );

  const setFile = useCallback((path: string, content: string) => {
    files.current.set(path, content);
  }, []);
  const removeFile = useCallback((path: string) => {
    files.current.delete(path);
  }, []);
  const value = useMemo(() => ({ setFile, removeFile }), [removeFile, setFile]);

  return (
    <BallerinaFilesContext.Provider value={value}>
      <BalrunBallerinaProvider colors={false} fs={fs}>
        {children}
      </BalrunBallerinaProvider>
    </BallerinaFilesContext.Provider>
  );
}

export function useBallerinaFiles(): BallerinaFilesContextValue {
  const value = useContext(BallerinaFilesContext);
  if (!value)
    throw new Error("useBallerinaFiles must be used within BallerinaProvider.");
  return value;
}
