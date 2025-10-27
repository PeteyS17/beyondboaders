import "../css/header.css";
import logo from "../images/bblogo.png";

const Header = () => {
  return (
    <header id="main-header">
      <div className="header-bar">
        <div className="logo">
        <img id="logo" src={logo} alt="Logo" />
        </div>
        <h1>Beyond Borders</h1>
        <p className="profile-name">Petey</p>
      </div>
    </header>
  );
};

export default Header;
