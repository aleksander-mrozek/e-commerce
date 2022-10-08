import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Product } from "../components/Product";
import { Footer } from "../components/Footer";

const DATA = {
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
  lobortis est at leo sodales, eu semper augue consectetur. Nulla id est
  et sem faucibus ullamcorper et in urna. Morbi neque dolor, gravida
  quis metus quis, convallis lacinia purus.`,
  thumbnailUrl: `https://picsum.photos/id/104/384/216`,
  thumbnailAlt: `dreamcatcher`,
  rating: 4.5,
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <Product data={DATA} />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
