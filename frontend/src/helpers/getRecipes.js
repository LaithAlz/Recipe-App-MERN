import axios from "axios";

const getRecipes = async (config) => {
  try {
    const data = await axios.get("http://localhost:4000/api/recipes", config);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getRecipes;
