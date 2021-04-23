import express from "express";
import { getArt } from "./routes/art";

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/art/search", getArt);

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
