import type { NextPage } from "next";
import {
  CollectionIcon,
  LightningBoltIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import scrollId from "../scripts/scroll-id";

const features = [
  {
    name: "Feature rich products & services",
    pos: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CollectionIcon,
  },
  {
    name: "Fast, reliable servers",
    pos: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "Great customer support",
    pos: 0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: SupportIcon,
  },
];

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
              <span className="block xl:inline text-green-300 font-bold sm:text-1x1">
                Upgrade
              </span>{" "}
              <span className="block xl:inline">your</span>{" "}
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
                  className="w-full flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 hover:cursor-pointer"
                  onClick={() => scrollId("features")}
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

        <div className="py-12" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                The better way to automate your groups & servers
              </h2>
            </div>

            <div className="mt-10 h-full">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-20 w-20 rounded-md bg-blue-600 text-white">
                        <feature.icon
                          className="h-12 w-12"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-24 text-2xl leading-6 font-bold text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-3 ml-24 text-lg text-gray-500 max-">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
