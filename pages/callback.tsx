import React from "react";
import { exchangeToken, saveTokens } from "../scripts/oauth";
import Router from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";

export default class Callback extends React.Component {
  static getInitialProps({ query }) {
    return {
      code: query.code,
    };
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
  };

  async componentDidMount() {
    if (this.props["code"] === undefined) await Router.push("/");
    stop();
    const data = await exchangeToken(`${this.props["code"]}`);
    console.log(data);
    if (data !== 400) {
      await saveTokens(data.access_token, data.refresh_token);
    }
    await Router.push("/");
  }
  render() {
    return (
      <div className="flex justify-center items-center w-screen vh-default-main bg-gray-900">
        <main className="bg-gray-900">
          <span className="flex justify-center items-center w-screen x1:inline text-white">
            <h1 className="text-blue-500 text-8xl x1:inline font-extrabold">
              Loading
            </h1>
            <p className="text-8xl">{" | "}</p>
            <h2 className="text-left">
              <span className="font-bold text-5xl">We are logging you in!</span>
              <br />
              <span className="text-3xl text-gray-400">
                Please allow up to 5 seconds to be redirected.{" "}
              </span>
            </h2>
          </span>
          <div className="mt-5 mx-auto sm:flex sm:justify-center md:mt-8 p-5 m-10">
            <div className="rounded-md shadow flex items-center justify-center py-3 border border-transparent text-base font-medium text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 m-5">
              <Link href="/">No redirect? Click here</Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
