function Support() {
  return <p>You will be redirected shortly :^)</p>;
}

export const getServerSideProps = async (context: { res: any }) => {
  const { res } = context;
  res.writeHead(301, {
    location: "discord.gg/2v8SusrX8y",
  });
  res.end();
};

export default Support;
