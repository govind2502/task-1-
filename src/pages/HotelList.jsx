import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, clearFilters } from "../redux/hotelSlice";
import SidebarFilters from "../components/SidebarFilters";
import HotelCard from "../components/HotelCard";
import Pagination from "../components/Pagination";
import "../styles/HotelList.css";

const HOTELS_PER_PAGE = 5;

function HotelList() {
  const dispatch = useDispatch();
  const { hotels, searchTerm, minPrice, maxPrice, minRating, currentPage } = useSelector(
    (state) => state.hotels
  );

  const filteredHotels = hotels.filter((hotel) => {
    const matchesName = hotel.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
    const matchesMin = minPrice === "" || hotel.price >= Number(minPrice);
    const matchesMax = maxPrice === "" || hotel.price <= Number(maxPrice);
    const matchesRating = hotel.rating >= minRating;
    return matchesName && matchesMin && matchesMax && matchesRating;
  });

  const totalPages = Math.ceil(filteredHotels.length / HOTELS_PER_PAGE);
  const startIndex = (currentPage - 1) * HOTELS_PER_PAGE;
  const hotelsOnThisPage = filteredHotels.slice(startIndex, startIndex + HOTELS_PER_PAGE);

  function handlePageChange(pageNumber) {
    dispatch(setCurrentPage(pageNumber));
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Helmet>
        <title>Hotels in India - Compare Prices & Ratings | StayFinder</title>
        <meta
          name="description"
          content="Browse hotels across India. Search by name and filter by price and star rating on StayFinder."
        />
        <meta property="og:title" content="Hotels in India | StayFinder" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="container list-layout">
        <SidebarFilters />

        <section className="list-main">
          <h1>Hotels in India</h1>
          <p className="result-count">
            {filteredHotels.length === 0
              ? "No hotels found"
              : `Showing ${startIndex + 1}–${startIndex + hotelsOnThisPage.length} of ${filteredHotels.length} hotels`}
          </p>

          {filteredHotels.length === 0 ? (
            <div className="empty-state">
              <p>No hotels match your search. Try a different name or widen the price range.</p>
              <button type="button" className="btn btn-primary" onClick={() => dispatch(clearFilters())}>
                Clear all filters
              </button>
            </div>
          ) : (
            hotelsOnThisPage.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </div>
    </>
  );
}

export default HotelList;
