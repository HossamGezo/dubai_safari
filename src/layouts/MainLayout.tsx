// React Router Dom
import {Outlet} from "react-router";
// Components
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import ScrollToTop from "@/components/common/scroll-to-top/ScrollToTop";
// Main Components
const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
