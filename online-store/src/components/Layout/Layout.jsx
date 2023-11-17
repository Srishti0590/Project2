import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="container-fluid px-4 py-3 py-lg-4 px-lg-5 position-relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
