import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

import { MarkdownResult } from "../types";

export const WebsiteReactMarkdown = ({
  children,
}: {
  children: MarkdownResult;
}) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }
          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          );
        },
      }}
    ></MDXRemote>
  );
};
