import axios from "axios";

export const removeCardReducer = (state: any, action: any) => {
  state.cards = state.cards.filter((card: any) => card.id !== action.payload);
  console.log(action.payload);
  axios
    .delete(`http://localhost:8080/task/delete-task?id=${action.payload}`)
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.error(error);
    });
};
