import Link from "next/link";
import { useRouter } from "next/router";

import { CartBar } from "./Cart/CartBar";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="w-full flex items-center justify-between bg-gray-700 px-4">
      <nav className="py-2 text-white">
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
      <CartBar />
    </header>
  );
};
