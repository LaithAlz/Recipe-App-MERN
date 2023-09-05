import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import postSignup from "./postSignup";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, name, password) => {
    setIsLoading(true);
    setError(null);

    const res = await postSignup(email, name, password);
    console.log("RES", res);

    if (res.response.status === 400) {
      setIsLoading(false);
      setError(res.response.data.error);
    }
    // console.log(error);

    if (res.status === 200) {
      localStorage.setItem("user", JSON.stringify(res.data));

      dispatch({ type: "LOGIN", payload: res.data });

      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
