import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-teal-100">
      <Header />
      <main className="flex-grow mx-auto max-w-2xl grid p-6 gap-6 sm:grid-cols-2">
        <img src="https://picsum.photos/id/104/384/216" alt="dreamcatcher" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          lobortis est at leo sodales, eu semper augue consectetur. Nulla id est
          et sem faucibus ullamcorper et in urna. Morbi neque dolor, gravida
          quis metus quis, convallis lacinia purus.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;