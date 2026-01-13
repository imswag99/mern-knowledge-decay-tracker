import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { addKnowledge, getAllKnowledge, reviseKnowledge } from "../controllers/knowledge.controller.js";

const knowledgeRouter = express.Router();

knowledgeRouter.post("/add", authMiddleware, addKnowledge);
knowledgeRouter.get("/", authMiddleware, getAllKnowledge);
knowledgeRouter.patch("/:id/revise", authMiddleware, reviseKnowledge);


export default knowledgeRouter;