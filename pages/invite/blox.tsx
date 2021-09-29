function InviteBlox() {
  return <p>You will be redirected shortly :^)</p>;
}

export const getServerSideProps = async (context: { res: any }) => {
  const { res } = context;
  res.writeHead(301, {
    location:
      "https://discord.com/api/oauth2/authorize?client_id=892151030903615548&permissions=1010822398&redirect_uri=https%3A%2F%2Ftyra.digital%2Fwelcome&scope=bot%20applications.commands",
  });
  res.end();
};

export default InviteBlox;
