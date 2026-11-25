import { createSlice } from "@reduxjs/toolkit";
import hotelsData from "../data/hotels";

const initialState = {
  hotels: hotelsData, 
  searchTerm: "", 
  minPrice: "", 
  maxPrice: "",
  minRating: 0, 
  currentPage: 1,
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.currentPage = 1;
    },
    setMinPrice(state, action) {
      state.minPrice = action.payload;
      state.currentPage = 1;
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload;
      state.currentPage = 1;
    },
    setMinRating(state, action) {
      state.minRating = Number(action.payload);
      state.currentPage = 1;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    clearFilters(state) {
      state.searchTerm = "";
      state.minPrice = "";
      state.maxPrice = "";
      state.minRating = 0;
      state.currentPage = 1;
    },
  },
});

export const {
  setSearchTerm,
  setMinPrice,
  setMaxPrice,
  setMinRating,
  setCurrentPage,
  clearFilters,
} = hotelSlice.actions;

export default hotelSlice.reducer;
