import * as fs from "fs";

export default function getSiteDescription() {
  let siteDescription = "Loading...";

  fs.readFile("/public/raw/text/description.txt", (err, data) => {
    if (err) return;
    console.log(data);
    siteDescription = data.toString();
  });

  let element = document.createElement(
    `<meta name="description" content=${siteDescription}/>`
  );

  document.getElementsByTagName("head")[0].appendChild(element);
}
