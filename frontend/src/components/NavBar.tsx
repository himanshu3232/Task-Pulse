import { Link } from "react-router-dom";
import Header from "./Header";

export default function NavBar() {
  return (
    <div style={{ display: "flex", marginBottom: "3rem" }}>
      <div style={{ marginRight: "auto" }}>
        <Link className="links" to="/">
          <Header title="Task Pulse" size={6} />
        </Link>
      </div>
      <ul className="nav-bar">
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="links" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}
