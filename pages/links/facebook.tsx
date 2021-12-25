function Link() {
    return;
  }
  
  export const getServerSideProps = async (context) => {
    const { res } = context;
    res.writeHead(301, {
      location:
        "https://facebook.com/kilroyrobotics",
    });
    return;
  };
  
  export default Link;
  