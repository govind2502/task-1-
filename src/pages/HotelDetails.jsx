import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MapComponent from "../components/MapComponent";
import StarRating from "../components/StarRating";
import "../styles/HotelDetails.css";

function HotelDetails() {
  const { id } = useParams();
  const hotels = useSelector((state) => state.hotels.hotels);
  const [imageFailed, setImageFailed] = useState(false);

  const hotel = hotels.find((item) => item.id === Number(id));

  if (!hotel) {
    return (
      <div className="container not-found">
        <Helmet>
          <title>Hotel not found | M D B</title>
        </Helmet>
        <h1>Hotel not found</h1>
        <Link to="/" className="btn btn-primary">Back to Hotels</Link>
      </div>
    );
  }

  return (
    <div className="container details-page">
      <Helmet>
        <title>{`${hotel.name}, ${hotel.city} - ₹${hotel.price} per night | StayFinder`}</title>
        <meta name="description" content={hotel.shortDescription} />
        <meta property="og:title" content={`${hotel.name} | StayFinder`} />
        <meta property="og:description" content={hotel.shortDescription} />
        <meta property="og:image" content={hotel.image} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Link to="/" className="btn btn-outline back-button">← Back to Hotels</Link>

      <div className="details-top">
        <div className="details-image">
          {imageFailed ? (
            <div className="image-placeholder">Image not available</div>
          ) : (
            <img
              src={hotel.image}
              alt={`${hotel.name} in ${hotel.city}`}
              onError={() => setImageFailed(true)}
            />
          )}
        </div>

        <div className="details-info">
          <h1>{hotel.name}</h1>
          <StarRating rating={hotel.rating} />
          <p className="hotel-location">{hotel.city}</p>
          <p className="details-price">
            ₹{hotel.price.toLocaleString("en-IN")} <span>per night</span>
          </p>
          <table className="details-table">
            <tbody>
              <tr><th>Rating</th><td>{hotel.rating} out of 5 stars</td></tr>
              <tr><th>Latitude</th><td>{hotel.latitude}</td></tr>
              <tr><th>Longitude</th><td>{hotel.longitude}</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <section className="details-section">
        <h2>About this hotel</h2>
        <p>{hotel.fullDescription}</p>
      </section>

      <section className="details-section">
        <h2>Location</h2>
        <MapComponent latitude={hotel.latitude} longitude={hotel.longitude} name={hotel.name} />
      </section>
    </div>
  );
}

export default HotelDetails;
