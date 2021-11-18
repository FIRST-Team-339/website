import type { NextPage } from "next";
import Link from "next/link";
import { LockClosedIcon } from "@heroicons/react/outline";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center w-screen h-screen-incl-comps">
      <main className="pt-16 pb-12 mx-auto sm:pt-24 bg-gray-900 w-screen h-full shadow-lg text-center">
        <h1 className="text-4xl tracking-tight font-bold text-gray-300 sm:text-5xl md:text-6xl">
          <span className="block text-gray-300 xl:inline">Tyra Digital</span>{" "}
          <span className="block text-blue-500 xl:inline">Privacy Policy</span>
        </h1>
        <br />
        <LockClosedIcon className="h-20 w-20 block text-red-400 xl:inline" />
        <p className="mt-3 mx-auto font-extrabold text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-6xl">
          Last updated and effective: 16th of November, 2021
        </p>
        <p className="mt-3 mx-auto font-medium text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-6xl">
          This privacy policy applies to the Discord Bot(s) Tyra#0020 (with ID
          of <strong>862392047461072946</strong>) & Tyra Canary#0193 (with ID of{" "}
          <strong>863071024076947497</strong>). For our{" "}
          <Link passHref={true} href="/products/tyrablox">
            <span className="text-blue-500 cursor-pointer">
              Roblox group Discord bot
            </span>
          </Link>{" "}
          refer to{" "}
          <Link passHref={true} href="/privacy/tyrablox">
            <span className="text-blue-500 cursor-pointer">
              its specific Privacy Policy
            </span>
          </Link>
          . Also see{" "}
          <Link passHref={true} href="https://discord.com/privacy">
            <span className="text-blue-500 cursor-pointer">
              Discords Privacy Policy
            </span>
          </Link>
        </p>
        <p className="mt-3 mx-auto font-medium text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-6xl">
          Tyra Digital does not store personal information from these bots. No
          user data is stored from these bots. The only server data stored is
          the server/guild id, moderator role ids, and autorole ids. Some server
          data is logged, but not stored in a database. New server joins are
          logged when you invite one of the bots AND the bot is online, that
          information includes the server id, and total members in a server.
          This is for analytic purposes and to see if possibly issues come from
          larger servers. Some information about command errors may be logged in
          the future, this privacy policy will be updated when/if done so.
        </p>
        <p className="mt-3 mx-auto font-medium text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-6xl">
          To gain contact with the lead developer/lead project manager &
          founder,{" "}
          <Link passHref={true} href="/support">
            <span className="text-blue-500 cursor-pointer">
              join our support server
            </span>
          </Link>{" "}
          and ask in our support channel to talk with Fisher about the privacy
          policy if you have any concerns.
        </p>
      </main>
    </div>
  );
};

export default Home;
