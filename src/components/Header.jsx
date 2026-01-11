import { NavLink, Link } from "react-router-dom";
import avatarIcon from "./../assets/avatar-icon.png";

export default function Header() {
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }
  const styles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const activeStyle = ({ isActive }) => (isActive ? styles : null);
  return (
    <header>
      <NavLink className="site-logo" to="/">
        #VANLIFE
      </NavLink>
      <nav>
        <NavLink style={activeStyle} to="host">
          Host
        </NavLink>
        <NavLink style={activeStyle} to="about">
          About
        </NavLink>
        <NavLink style={activeStyle} to="vans">
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={avatarIcon} alt="Login Icon" className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}

/* 
Alternative of inline-styles: using className

Header.jsx
className={({ isActive }) => (isActive ? "active-link" : null)}

index.css
.active-link {
  font-weight: bold;
  text-decoration: underline;
  color: #161616;
} 
*/
