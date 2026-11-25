import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearFilters } from "../redux/hotelSlice";
import SearchBar from "./SearchBar";
import "../styles/Navbar.css";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" aria-label="M D B home">
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="3" width="16" height="18" fill="#fff" />
            <rect x="7" y="6" width="3" height="3" fill="#1457b8" />
            <rect x="14" y="6" width="3" height="3" fill="#1457b8" />
            <rect x="7" y="11" width="3" height="3" fill="#1457b8" />
            <rect x="14" y="11" width="3" height="3" fill="#1457b8" />
            <rect x="10" y="16" width="4" height="5" fill="#1457b8" />
          </svg>
          <span>M D B</span>
        </Link>

        <SearchBar />

        <Link to="/" className="nav-link" onClick={() => dispatch(clearFilters())}>
          All Hotels
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
