// Local sample data. Prices are in Indian Rupees per night.
// Images come from Unsplash. If one fails to load, the page shows a grey placeholder.
const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`;

const hotels = [
  {
    id: 1,
    name: "Marina Bay Residency",
    city: "Chennai, Tamil Nadu",
    price: 6200,
    rating: 4,
    latitude: 13.05,
    longitude: 80.2824,
    image: img("photo-1566073771259-6a8506099945"),
    shortDescription: "Sea-facing rooms a short walk from Marina Beach, with a rooftop restaurant.",
    fullDescription:
      "Marina Bay Residency sits close to Marina Beach and offers 120 air-conditioned rooms, many with sea views. Guests can use the rooftop restaurant, a swimming pool and a business lounge. The central railway station is 20 minutes away by car.",
  },
  {
    id: 2,
    name: "Race Course Grand",
    city: "Coimbatore, Tamil Nadu",
    price: 4500,
    rating: 4,
    latitude: 11.0003,
    longitude: 76.9748,
    image: img("photo-1551882547-ff40c63fe5fa"),
    shortDescription: "Comfortable business hotel beside the Race Course walking track.",
    fullDescription:
      "Race Course Grand is a quiet business hotel next to the Race Course walking track in the heart of Coimbatore. Rooms include a work desk and free Wi-Fi. The hotel has a South Indian restaurant, a conference hall and airport pick-up on request.",
  },
  {
    id: 3,
    name: "Palm Shore Resort",
    city: "Calangute, Goa",
    price: 9800,
    rating: 5,
    latitude: 15.544,
    longitude: 73.7553,
    image: img("photo-1520250497591-112f2f40a3f4"),
    shortDescription: "Beachside resort with two pools, a spa and live music evenings.",
    fullDescription:
      "Palm Shore Resort is a five-star beach resort a few steps from Calangute Beach. It has two swimming pools, a full-service spa, three restaurants and a kids' play area. Water sports can be booked at the front desk.",
  },
  {
    id: 4,
    name: "Amber Heritage Haveli",
    city: "Jaipur, Rajasthan",
    price: 7400,
    rating: 4,
    latitude: 26.9855,
    longitude: 75.8513,
    image: img("photo-1564501049412-61c2a3083791"),
    shortDescription: "Restored haveli with courtyard dining and views of Amber Fort.",
    fullDescription:
      "This restored 19th-century haveli has 36 rooms decorated with local handicrafts. Meals are served in the central courtyard, and the rooftop terrace looks over Amber Fort. Guided city tours and cooking classes are available.",
  },
  {
    id: 5,
    name: "Tea Valley Retreat",
    city: "Munnar, Kerala",
    price: 5600,
    rating: 4,
    latitude: 10.0889,
    longitude: 77.0595,
    image: img("photo-1445019980597-93fa8acb246c"),
    shortDescription: "Cottages surrounded by tea plantations, with guided plantation walks.",
    fullDescription:
      "Tea Valley Retreat offers 24 wooden cottages set among tea estates at 1,600 metres. Guests can join morning plantation walks and visit the nearby tea factory. Each cottage has a private balcony and a fireplace for cool evenings.",
  },
  {
    id: 6,
    name: "Gateway Suites",
    city: "Colaba, Mumbai",
    price: 12500,
    rating: 5,
    latitude: 18.922,
    longitude: 72.8347,
    image: img("photo-1582719508461-905c673771fd"),
    shortDescription: "Luxury suites close to the Gateway of India and the waterfront.",
    fullDescription:
      "Gateway Suites is a five-star hotel in Colaba, a short walk from the Gateway of India. All rooms are suites with a separate sitting area. The hotel has a fine-dining restaurant, a fitness centre and a 24-hour concierge desk.",
  },
  {
    id: 7,
    name: "Backwater Pearl",
    city: "Fort Kochi, Kerala",
    price: 5200,
    rating: 3,
    latitude: 9.9658,
    longitude: 76.2421,
    image: img("photo-1571896349842-33c89424de2d"),
    shortDescription: "Simple, clean rooms near the Chinese fishing nets and Fort Kochi cafes.",
    fullDescription:
      "Backwater Pearl is a three-star hotel in Fort Kochi, close to the Chinese fishing nets, cafes and art galleries. Rooms are clean and simple, and breakfast with Kerala dishes is included in the price.",
  },
  {
    id: 8,
    name: "Lake View Palace Inn",
    city: "Udaipur, Rajasthan",
    price: 8900,
    rating: 5,
    latitude: 24.576,
    longitude: 73.68,
    image: img("photo-1542314831-068cd1dbfeed"),
    shortDescription: "Rooms overlooking Lake Pichola, with a sunset terrace restaurant.",
    fullDescription:
      "Lake View Palace Inn faces Lake Pichola and the City Palace. Most rooms have lake views, and the terrace restaurant is popular at sunset. Boat rides on the lake and traditional dance shows can be arranged by the hotel.",
  },
  {
    id: 9,
    name: "Garden City Inn",
    city: "MG Road, Bengaluru",
    price: 3200,
    rating: 3,
    latitude: 12.9756,
    longitude: 77.6068,
    image: img("photo-1578683010236-d716f9a3f461"),
    shortDescription: "Affordable rooms next to the MG Road metro station.",
    fullDescription:
      "Garden City Inn is an affordable three-star hotel next to the MG Road metro station. It is a good choice for short business trips, with free Wi-Fi, a small restaurant and shops and cafes within walking distance.",
  },
  {
    id: 10,
    name: "Nilgiri Hills Lodge",
    city: "Ooty, Tamil Nadu",
    price: 3900,
    rating: 3,
    latitude: 11.4102,
    longitude: 76.695,
    image: img("photo-1455587734955-081b22074882"),
    shortDescription: "Family-run lodge near the Botanical Garden with mountain views.",
    fullDescription:
      "Nilgiri Hills Lodge is a family-run hotel ten minutes from the Government Botanical Garden. Rooms have heaters and views of the Nilgiri hills. Home-style breakfast and dinner are served in the dining hall.",
  },
  {
    id: 11,
    name: "Connaught Plaza Hotel",
    city: "Connaught Place, New Delhi",
    price: 10800,
    rating: 5,
    latitude: 28.6315,
    longitude: 77.2167,
    image: img("photo-1566073771259-6a8506099945"),
    shortDescription: "Central five-star hotel with a spa, pool and three restaurants.",
    fullDescription:
      "Connaught Plaza Hotel is in the centre of New Delhi, close to metro lines and major shopping streets. It has 210 rooms, an indoor pool, a spa and three restaurants serving Indian and international food.",
  },
  {
    id: 12,
    name: "White Town Boutique",
    city: "Puducherry",
    price: 6800,
    rating: 4,
    latitude: 11.934,
    longitude: 79.835,
    image: img("photo-1551882547-ff40c63fe5fa"),
    shortDescription: "Boutique hotel in a French-colonial building, steps from the promenade.",
    fullDescription:
      "White Town Boutique is set in a restored French-colonial house in Puducherry's White Town, a few minutes from the seafront promenade. It has 14 rooms, a garden cafe and bicycles that guests can borrow for exploring the town.",
  },
];

export default hotels;
