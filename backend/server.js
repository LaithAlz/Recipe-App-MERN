require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const recipeRoutes = require("./routes/recipeRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use("/api/recipes", recipeRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.URI)
  .then(() => {
    //Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
