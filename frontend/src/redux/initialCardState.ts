import axios from "axios";
import Card from "../components/Card";

interface Card {
  id: number;
  title: string;
  body: string;
}
interface State {
  cards: Card[];
}

const data = async (): Promise<Card[]> => {
  try {
    const data = (await axios.get("http://localhost:8080/task/get-all-tasks")).data;
    return data;
  } catch (err: any) {
    console.error("Data couldn't be retrieved", err.message);
  }
  return [];
};

export const initialState: State = {
  cards: await data(),
};
