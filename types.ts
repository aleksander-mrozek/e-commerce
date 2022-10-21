import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type MarkdownResult = MDXRemoteSerializeResult<Record<string, unknown>>;

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;
