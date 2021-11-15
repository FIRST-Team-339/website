// import Footer from "./footer.component";
import Navbar from "./navbar.component";

export default function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
