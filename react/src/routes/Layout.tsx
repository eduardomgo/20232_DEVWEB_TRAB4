import { Outlet } from "react-router-dom";
import NavBar from "../components/molecules/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
}
export default Layout;
