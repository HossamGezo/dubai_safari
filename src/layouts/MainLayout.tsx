// Libraries
import { Suspense } from "react";
import { Outlet } from "react-router";
// Components
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import ScrollToTop from "@/components/common/scroll-to-top/ScrollToTop";
import Spinner from "@/components/common/spinner/Spinner";

// Main Components
const MainLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow flex flex-col">
          <Suspense
            fallback={
              <div className="grow flex items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
