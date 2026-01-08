import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const styles = ({ isActive }) => (isActive ? activeStyles : null);
  return (
    <>
      <nav className="host-nav">
        <NavLink style={styles} to="." end>
          Dashboard
        </NavLink>
        <NavLink style={styles} to="income" end>
          Income
        </NavLink>
        <NavLink style={styles} to="hostvans" end>
          Vans
        </NavLink>
        <NavLink style={styles} to="reviews" end>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
