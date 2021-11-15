import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center w-screen h-screen">
      <main className="bg-gray-300">
        <div className="pt-16 pb-12 mx-auto sm:pt-24 bg-gray-900 w-screen shadow-lg">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-bold text-gray-300 sm:text-5xl md:text-6xl">
              <span className="block xl:inline text-green-300 font-extrabold sm:text-1x1">
                &uarr;
              </span>{" "}
              <span className="block xl:inline">Upgrade your</span>{" "}
              <span className="block text-blue-500 xl:inline">
                Discord Server
              </span>
            </h1>
            <p className="mt-3 mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Quit using 10 different products & services for all your needs.
              Instead, start with Tyra.
            </p>
            <div className="mt-5 mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  className="w-full flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  href="/get-started"
                >
                  Get started with Tyra
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </div>
  );
};

export default Home;
