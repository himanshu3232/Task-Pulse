import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialCardState";
import { addCardReducer } from "./card-reducers/addCardReucer";
import { removeCardReducer } from "./card-reducers/removeCardReducer";
import { updateCardReducer } from "./card-reducers/updateCardReducer";

const cardSlice = createSlice({
  name: "cardContent",
  initialState,
  reducers: {
    addCard: addCardReducer,
    removeCard: removeCardReducer,
    updateCard: updateCardReducer,
  },
});

export const { addCard, removeCard, updateCard } = cardSlice.actions;
export default cardSlice.reducer;
