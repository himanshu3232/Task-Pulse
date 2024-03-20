import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardContentsSlice";

const store = configureStore({
  reducer: {
    cardContent: cardSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
