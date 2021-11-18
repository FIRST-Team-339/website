import Cookie from "js-cookie";
import axios from "axios";
import type Axios from "axios";

const redirect_uri = encodeURIComponent("http://localhost:3000/callback");

async function exchangeToken(code) {
  return await axios
    .post(
      "https://discordapp.com/api/oauth2/token",
      `code=${code}&grant_type=authorization_code&client_id=${process.env.DISCORD_CLIENT_ID}&client_secret=${process.env.DISCORD_CLIENT_SECRET}&redirect_uri=${redirect_uri}&scope=guilds%20identify`,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    )
    .then(
      (res) => {
        return res.data;
      },
      (error) => {
        if (error.response.status.toString() === "400") {
          return error.response.status;
        }
      }
    );
}

async function refreshToken(refreshToken) {
  const res = await axios
    .post(
      "https://discordapp.com/api/oauth2/token",
      `refresh_token=${refreshToken}&grant_type=refresh_token&client_id=${process.env.DISCORD_CLIENT_ID}&client_secret=${process.env.DISCORD_CLIENT_SECRET}&redirect_uri=${redirect_uri}&scope=guilds%20identify`,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    )
    .then((res) => {
      return res.data;
    })
    .catch(console.error);
}

function saveTokens(token, refreshToken) {
  Cookie.set("token", token);
  Cookie.set("refreshToken", refreshToken);
}

function deleteTokens() {
  Cookie.remove("token");
  Cookie.remove("refreshToken");
}

function getTokensForBrowser() {
  let token = Cookie.getJSON("token");
  let refreshToken = Cookie.getJSON("refreshToken");
  return {
    token: token,
    refreshToken: refreshToken,
  };
}

function getTokensForServer(req) {
  if (req.headers.cookie) {
    const cookieToken = req.headers.cookie
      .split(";")
      .find((c) => c.trim().startsWith("token="));
    const cookieRefreshToken = req.headers.cookie
      .split(";")
      .find((c) => c.trim().startsWith("refreshToken="));

    let token = cookieToken.split("=")[1];
    let refreshToken = cookieRefreshToken.split("=")[1];

    return {
      token: token,
      refreshToken: refreshToken,
    };
  }
}

export {
  exchangeToken,
  refreshToken,
  saveTokens,
  deleteTokens,
  getTokensForBrowser,
  getTokensForServer,
};