import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center w-screen h-screen-incl-comps">
      <main className="pt-16 pb-12 mx-auto sm:pt-24 bg-gray-900 w-screen shadow-lg">
        <h1 className="text-4xl tracking-tight font-bold text-gray-300 sm:text-5xl md:text-6xl">
          <span className="block text-gray-300 xl:inline">Tyra Digital</span>{" "}
          <span className="block text-red-400 xl:inline">Privacy Policy</span>
        </h1>
        <p className="mt-3 mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Quit using 10 different products & services for all your needs.
          Instead, start with Tyra.
        </p>
      </main>
    </div>
  );
};

export default Home;
