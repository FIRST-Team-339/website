import Navbar from "./navbar.component";
import Footer from "./footer.component";

export default function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
