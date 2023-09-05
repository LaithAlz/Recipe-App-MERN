import axios from "axios";

const postSignup = async (email, password, name) => {
  try {
    const res = await axios.post("http://localhost:4000/api/users/signup", {
      email,
      name,
      password,
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default postSignup;
