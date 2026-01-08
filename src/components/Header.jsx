import { NavLink } from "react-router-dom";

export default function Header() {
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
        <NavLink style={activeStyle} to="/host">
          Host
        </NavLink>
        <NavLink style={activeStyle} to="/about">
          About
        </NavLink>
        <NavLink style={activeStyle} to="/vans">
          Vans
        </NavLink>
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