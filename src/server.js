import express from "express";
import root from "./Routers/rootRouter";

const app = express();

app.use("/", root);

export default app;
