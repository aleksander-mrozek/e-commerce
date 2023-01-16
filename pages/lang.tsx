import Link from "next/link";
import { useRouter } from "next/router";

const LangPage = () => {
  const router = useRouter();

  return (
    <ul>
      {router.locales?.map((locale) => (
        <li key={locale}>
          <Link href={router.asPath} locale={locale}>
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LangPage;
