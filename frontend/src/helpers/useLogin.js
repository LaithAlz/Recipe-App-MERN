import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import postLogin from "../api/postLogin";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const res = await postLogin(email, password);
    console.log(email, password);

    if (!res.status) {
      setIsLoading(false);
      setError(res.error);
    }

    if (res.status) {
      localStorage.setItem("user", JSON.stringify(res.data));

      dispatch({ type: "LOGIN", payload: res.data });

      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
