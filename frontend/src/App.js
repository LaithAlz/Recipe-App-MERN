import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import AddRecipe from "./pages/AddRecipe";
import Categories from "./pages/Categories";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import RecipeDetails from "./pages/RecipeDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./helpers/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/recipes"
            element={user ? <Recipes /> : <Navigate to="/login" />}
          />
          <Route
            path="/add-recipe"
            element={user ? <AddRecipe /> : <Navigate to="/login" />}
          />
          <Route
            path="/categories"
            element={user ? <Categories /> : <Navigate to="/login" />}
          />
          <Route
            path="/contact"
            element={user ? <ContactUs /> : <Navigate to="/login" />}
          />
          <Route
            path="/recipes/:id"
            element={user ? <RecipeDetails /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
