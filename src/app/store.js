import { configureStore } from "@reduxjs/toolkit";
import priceValueReducer from '../feature/CardData'

export default configureStore({
  reducer: {
    priceCard: priceValueReducer
  }
})