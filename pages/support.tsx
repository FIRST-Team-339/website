function SupportServer() {
  return;
}

export const getServerSideProps = async (context) => {
  const { res } = context;
  res.writeHead(301, {
    location: "https://discord.gg/2v8SusrX8y",
  });
  return;
};

export default SupportServer;
