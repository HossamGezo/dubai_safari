// React Router Dom
import { Outlet } from "react-router";
// Components
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
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
