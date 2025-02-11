import express from "express";
import morgan from "morgan";
import { errorHandler, notFound } from "./middlewares/error.middleware.js";
import parserRouter from "./routes/parser.router.js";

const app = express();
const port = process.env.PORT || 5001;

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/api", parserRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
