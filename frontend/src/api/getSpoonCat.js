import axios from "axios";
import { key } from "./KEY";

const getSpoonCat = async (num, cat) => {
  console.log('FETCHING');
  const API = key;
  const response = await axios.get(
    "https://api.spoonacular.com/recipes/complexSearch",
    {
      params: {
        apiKey: API,
        type: cat,
        number: 10,
      },
    }
  );
  console.log('DONE FETCHING');

  return response;
};

export default getSpoonCat;
