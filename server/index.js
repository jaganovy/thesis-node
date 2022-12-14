import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Routes
import PostRoutes from "./routes/posts.js";
import CategoriesRoutes from "./routes/categories.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://jaganovy:$funfunKey10@eventmanagementdb.jpsfrz3.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false)

app.get("/", (req, res) => {
  res.send("<h1>hello app</h1>");
});

// app.use("api/", PostRoutes);
app.use("/api", CategoriesRoutes);

app.listen(4000);
