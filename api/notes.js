import express from "express";
import { getNotes } from "#db/notes";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(getNotes());
});

router.post("/", (req, res, next) => {
  console.log(req.body);

  res.status(404).send(req.body);
});

router.get("/:id", (req, res) => {
  res.status(200).send("TODO: /notes/:id");
});

export default router;
