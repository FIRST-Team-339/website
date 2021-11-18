import Navbar from "./navbar.component";
import Banner from "./banner.component";
import Footer from "./footer.component";

export default function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <Banner />
      <main className="vh-default-main bg-gray-300 w-full">{children}</main>
      <Footer />
    </div>
  );
}
