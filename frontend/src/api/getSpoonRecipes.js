import axios from "axios";
import { key } from "./KEY";

const getSpoonRecipes = async (num) => {
  const API = key;
  const data = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${API}&number=${num}`
  );
  return data;
  //&tags=vegetarian,dessert, ${num}
};

export default getSpoonRecipes;
