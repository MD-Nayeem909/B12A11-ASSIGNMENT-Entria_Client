import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Container from "../components/common/Container";

const DashboardLayout = () => {
  return (
    <div className="">
      <Container>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </div>
  );
};

export default DashboardLayout;
