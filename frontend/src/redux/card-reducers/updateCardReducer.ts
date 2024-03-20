import axios from "axios";

export const updateCardReducer = (state: any, action: any) => {
  const { id, title, body } = action.payload;
  const index = state.cards.findIndex((card: any) => card.id === id);
  if (index !== -1) {
    state.cards[index] = { id, title, body };
  }
  axios
    .put("http://localhost:8080/task/update-task", action.payload)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.error(err.message));
};
