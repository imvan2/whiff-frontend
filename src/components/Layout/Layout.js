import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

function Layout() {
  return (
    <>
      <Header />
      <SearchBar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
