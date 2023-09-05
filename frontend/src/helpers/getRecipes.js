import axios from "axios";

const getRecipes = async () => {
  try {
    const data = await axios.get("http://localhost:4000/api/recipes");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getRecipes;
