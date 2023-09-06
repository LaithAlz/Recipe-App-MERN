import { useAuthContext } from "./useAuthContext";
import { useRecipeContext } from "./useRecipeContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: recipesDispatch } = useRecipeContext();

  const logout = () => {
    //remove user from stroage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    recipesDispatch({ type: "SET_RECIPES", payload: [] });
  };

  return { logout };
};
