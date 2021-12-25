import type { NextPage } from "next";
import path from "path"
import fs from "fs"
import Image from "next/image";
import scrollId from "../scripts/scroll-id";


const Home: NextPage | any = (pageProps) => {
  return (
    <div className="flex justify-center h-screen">
      <main className="bg-gray-300"> 
      {console.log(pageProps)}
      {/* THIS DIV BELOW IS A FAKE DIV TO ADD IN THE BLUR EFFECTS */}
        <div className="absolute pt-16 pb-12 sm:pt-2 w-screen h-screen shadow-lg bg-thumbnail-img bg-top bg-no-repeat bg-cover element-blur left-0 z-1">
          <div className="text-center element-clear opacity-0">
            <h1 className="text-4xl tracking-tight font-bold text-gray-300 sm:text-5xl md:text-6xl text-stroke">
              <span className="block xl:inline font-bold sm:text-1x1">
                Who{"'"}s here?
              </span>{" "}
              <span className="block text-yellow-600 xl:inline font-extrabold">
                Kilroy
              </span>{" "}
              <span className="block xl:inline">is here!</span>{" "}
            </h1>
            <br />
            <h2 className="text-3xl tracking-tight font-bold text-gray-300 sm:text-4xl md:text-5xl text-stroke">
                <span className="block xl:inline text-yellow-600 font-bold sm:text-1x1">
                  Kilroy Robotics
                </span>{" "}
                <span className="block xl:inline">Team</span>{" "}
                <span className="block text-yellow-600 xl:inline font-extrabold">
                  339
                </span>
            </h2>
            <div className="mt-5 mx-auto sm:flex sm:justify-center md:mt-8 p-64">
              <div className="rounded-md shadow">
                <a
                  className="w-full flex items-center justify-center py-3 px-5 md:py-4 md:px-10 md:text-large border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-600 to-yellow-700 hover:bg-yellow-700 hover:cursor-pointer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* THIS DECOY IS THE REAL DIV TO EDIT */}
        <div className="absolute pt-16 pb-12 sm:pt-2 w-screen h-screen z-2 left-0">
          <div className="text-center element-clear">
            <h1 className="text-4xl tracking-tight font-bold text-gray-300 sm:text-5xl md:text-6xl text-stroke">
              <span className="block xl:inline font-bold sm:text-1x1">
                Who{"'"}s here?
              </span>{" "}
              <span className="block text-orange-600 xl:inline font-extrabold">
                Kilroy
              </span>{" "}
              <span className="block xl:inline">is here!</span>{" "}
            </h1>
            <br />
            <h2 className="text-3xl tracking-tight font-bold text-gray-300 sm:text-4xl md:text-5xl text-stroke">
                <span className="block xl:inline text-orange-600 font-bold sm:text-1x1">
                  Kilroy Robotics
                </span>{" "}
                <span className="block xl:inline">Team</span>{" "}
                <span className="block text-orange-600 xl:inline font-extrabold">
                  339
                </span>
            </h2>
            <div className="mt-5 mx-auto sm:flex sm:justify-center md:mt-8 p-64">
              <div className="rounded-md shadow">
                <a
                  className="w-full flex items-center justify-center py-3 px-5 md:py-4 md:px-10 md:text-large border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-600 to-yellow-700 hover:bg-yellow-700 hover:cursor-pointer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-center font-bold">hello</h3>
      </main>
    </div> 
  );
};

export async function getStaticProps() {
  const filenames = fs.readdirSync("./public/text")

  const texts = {}

  filenames.map(filename => {
    const filePath = path.join("./public/text", filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    texts[`${filename.split(".")[0]}`] = fileContents
    return;
  })

  return {
    props: {
      texts,
    },
  }
}

export default Home;
