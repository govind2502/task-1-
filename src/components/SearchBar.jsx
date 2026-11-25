import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setSearchTerm } from "../redux/hotelSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state) => state.hotels.searchTerm);

  // Runs on every key press: save the text in Redux.
  // If the user is on a details page, go back to the list to see results.
  function handleChange(event) {
    dispatch(setSearchTerm(event.target.value));
    if (location.pathname !== "/") {
      navigate("/");
    }
  }

  function handleSubmit(event) {
    event.preventDefault(); // stop the browser from reloading the page
    navigate("/");
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search hotels by name"
        aria-label="Search hotels by name"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
