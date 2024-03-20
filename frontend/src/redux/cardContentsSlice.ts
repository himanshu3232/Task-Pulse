import { createSlice } from "@reduxjs/toolkit";
import Card from "../components/Card";

interface Card {
  id: number;
  title: string;
  body: string;
}
interface State {
  cards: Card[];
}

const initialState: State = {
  cards: [
    {
      id: 1,
      title: "title1",
      body: "body",
    },
    {
      id: 2,
      title: "title2",
      body: "body",
    },
  ],
};

const cardSlice = createSlice({
  name: "cardContent",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    updateCard: (state, action) => {
      const { id, title, body } = action.payload;
      const index = state.cards.findIndex((card) => card.id === id);
      if (index !== -1) {
        state.cards[index] = { id, title, body };
      }
    },
  },
});

export const { addCard, removeCard, updateCard } = cardSlice.actions;
export default cardSlice.reducer;
