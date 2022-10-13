import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { ProductDetails } from "../components/Product";
import { Footer } from "../components/Footer";

const DATA = {
  id: 99999,
  title: "Dreamcatcher",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  thumbnailUrl: "https://picsum.photos/id/104/384/216",
  thumbnailAlt: "dreamcatcher",
  rating: 4.5,
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <ProductDetails data={DATA} />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
