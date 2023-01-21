import express from "express";
import { home } from "../Controllers/rootController";

const root = express.Router();
root.get("/", home);

export default root;
