import axios from "axios";

const postLogin = async (email, password) => {
  const res = await axios.post("http://localhost:4000/api/users/login", {
    email,
    password,
  });
  return res;
};

export default postLogin;
