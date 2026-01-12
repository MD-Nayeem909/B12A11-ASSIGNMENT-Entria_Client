import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Container from "../components/common/Container";
import DashNav from "../components/Dashboard/DashNav";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
      <section>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <div className="sticky top-0 z-100">
              <DashNav />
            </div>
            {/* Page content here */}
            <div className="">
              <Outlet />
            </div>
          </div>
          <Sidebar />
        </div>
        <Footer />
      </section>
  );
};

export default DashboardLayout;
