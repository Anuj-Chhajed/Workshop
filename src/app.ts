import express from "express";
import { connectDB } from "./config/db";
import noteRoutes from "./routes/note.routes";
import errorMiddleware from "./middlewares/error.middleware";

const app = express();
app.use(express.json());

app.use("/notes", noteRoutes);
app.use(errorMiddleware);

connectDB();
app.listen(3000, () => console.log("Server running"));
