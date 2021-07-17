import Footer from './Footer.component';
import Navbar from './Navbar.component';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}