import axios from "axios";

export const addCardReducer = (state: any, action: any) => {
  state.cards.push(action.payload);
  axios
    .post("http://localhost:8080/task/add-task", action.payload)
    .then((response) => {
      console.log("Data sent successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });
};
