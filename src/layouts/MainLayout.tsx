import {Outlet} from "react-router";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
