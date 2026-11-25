import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
  setMinRating,
  clearFilters,
} from "../redux/hotelSlice";

function SidebarFilters() {
  const dispatch = useDispatch();
  const { minPrice, maxPrice, minRating } = useSelector((state) => state.hotels);
  const [isOpen, setIsOpen] = useState(false); // only used on mobile

  const ratingOptions = [
    { value: 0, label: "Any rating" },
    { value: 3, label: "3 stars & up" },
    { value: 4, label: "4 stars & up" },
    { value: 5, label: "5 stars" },
  ];

  return (
    <aside className="sidebar">
      <button
        type="button"
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {isOpen ? "Hide filters" : "Show filters"}
      </button>

      <div className={isOpen ? "sidebar-content open" : "sidebar-content"}>
        <h3>Filters</h3>

        <fieldset>
          <legend>Price per night (₹)</legend>
          <div className="price-inputs">
            <input
              type="number"
              min="0"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => dispatch(setMinPrice(e.target.value))}
              aria-label="Minimum price"
            />
            <span>to</span>
            <input
              type="number"
              min="0"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => dispatch(setMaxPrice(e.target.value))}
              aria-label="Maximum price"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Star rating</legend>
          {ratingOptions.map((option) => (
            <label key={option.value} className="radio-row">
              <input
                type="radio"
                name="rating"
                checked={minRating === option.value}
                onChange={() => dispatch(setMinRating(option.value))}
              />
              {option.label}
            </label>
          ))}
        </fieldset>

        <button
          type="button"
          className="btn btn-outline"
          onClick={() => dispatch(clearFilters())}
        >
          Clear all filters
        </button>
      </div>
    </aside>
  );
}

export default SidebarFilters;
