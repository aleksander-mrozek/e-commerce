import Link from "next/link";

export const Header = () => {
  return (
    <header className="mx-auto max-w-5xl w-full">
      <nav className="bg-gray-700 px-4 py-2 text-white">
        <Link href="/">
          <a>Main Page</a>
        </Link>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </nav>
    </header>
  );
};