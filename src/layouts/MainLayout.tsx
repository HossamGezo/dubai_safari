// React Router Dom
import { Outlet } from "react-router";
// Components
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";
// Main Components
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
