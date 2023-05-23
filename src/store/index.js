import { configureStore } from "@reduxjs/toolkit";
import Songs from "./songs/Songs";

const store = configureStore({
  reducer: {
    Songs,
  },
});

export default store;
