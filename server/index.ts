import express from "express";
import { logger } from "./middleware";

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(8080, () => {
	console.log("Server started on port 8080");
});
