import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Container from "../components/common/Container";
import DashNav from "../components/Dashboard/DashNav";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="">
      <Container>
        <DashNav />
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Outlet />
          </div>
          <Sidebar />
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default DashboardLayout;
