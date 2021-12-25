function Link() {
    return;
  }
  
  export const getServerSideProps = async (context) => {
    const { res } = context;
    res.writeHead(301, {
      location:
        "https://twitter.com/firstinspires.org",
    });
    return;
  };
  
  export default Link;
  