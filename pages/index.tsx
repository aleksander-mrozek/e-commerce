import { Main } from "../components/Main";
import { ProductDetails } from "../components/Product";

const DATA = {
  id: 99999,
  title: "Dreamcatcher",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  thumbnailUrl: "https://picsum.photos/id/104/384/216",
  thumbnailAlt: "dreamcatcher",
  rating: 4.5,
  longDescription: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

const Home = () => {
  return (
    <Main>
      <ProductDetails data={DATA} />
    </Main>
  );
};

export default Home;
