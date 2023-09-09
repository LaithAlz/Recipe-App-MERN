import axios from "axios";

const getOneRecipe = async (id, config) => {
  try {
    const data = await axios.get(`http://localhost:4000/api/recipes/${id}`, config);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getOneRecipe;
