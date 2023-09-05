import axios from "axios";

const addRecipe = async (recipeData) => {
  try {
    console.log("Sending Recipe Data:", recipeData);

    const data = await axios.post(
      "http://localhost:4000/api/recipes",
      JSON.stringify(recipeData),
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("Add Recipe", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default addRecipe;
