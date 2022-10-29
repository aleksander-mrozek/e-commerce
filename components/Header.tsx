import Link from "next/link";
import { useRouter } from "next/router";

import { CartBar } from "./Cart/CartBar";

export const Header = () => {
  const router = useRouter();
  const mr = "mr-4 ";
  return (
    <header className="w-full flex items-center justify-between bg-gray-700 px-4">
      <nav className="py-2 text-white">
        <Link href="/">
          <a
            className={mr + (router.pathname === "/" ? "text-indigo-300" : "")}
          >
            Main
          </a>
        </Link>
        <Link href="/about">
          <a
            className={
              mr + (router.pathname === "/about" ? "text-indigo-300" : "")
            }
          >
            About
          </a>
        </Link>
        <Link href="/products-ssg">
          <a
            className={
              mr +
              (router.pathname === "/products-ssg" ? "text-indigo-300" : "")
            }
          >
            Products - SSG
          </a>
        </Link>
        <Link href="/products-csr">
          <a
            className={
              mr +
              (router.pathname === "/products-csr" ? "text-indigo-300" : "")
            }
          >
            Products - CSR
          </a>
        </Link>
      </nav>
      <CartBar />
    </header>
  );
};
