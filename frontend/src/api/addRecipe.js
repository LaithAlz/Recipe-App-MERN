import axios from "axios";

const addRecipe = async (recipeData, user) => {
  try {
    console.log("Sending Recipe Data:", recipeData);

    const data = await axios.post(
      "http://localhost:4000/api/recipes",
      recipeData,
      // {headers: {}}
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.token,
        },
      }
    );

    console.log("Add Recipe", data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default addRecipe;
