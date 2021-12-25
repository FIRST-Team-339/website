function Link() {
    return;
  }
  
  export const getServerSideProps = async (context) => {
    const { res } = context;
    res.writeHead(301, {
      location:
        "https://github.com/FIRST-TEAM-339",
    });
    return;
  };
  
  export default Link;
  