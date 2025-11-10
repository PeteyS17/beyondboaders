import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div id="content">
      <Header />
      <Navigation />  
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
