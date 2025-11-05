// React Router Dom
import { Outlet } from "react-router";
// Components
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
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
