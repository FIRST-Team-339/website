/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  // replace [yourprojectname] and [yourdomain.com] with your actual project name and (custom) domain
  cloudflareImageLoader: ({ src, width, quality }) => {
    if (!quality) {
      quality = 75;
    }
    return `https://imgs_tyra.fisherdev.workers.dev?width=${width}&quality=${quality}&image=https://dev.tyra.digital${src}`;
  },
};
