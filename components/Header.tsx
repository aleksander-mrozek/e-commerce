import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="mx-auto max-w-5xl w-full">
      <nav className="bg-gray-700 px-4 py-2 text-white">
        <Link href="/">
          <a className={router.pathname === "/" ? "text-indigo-300" : ""}>
            Main Page
          </a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "text-indigo-300" : ""}>
            About Page
          </a>
        </Link>
      </nav>
    </header>
  );
};
