import express from "express";
import { addNote, getNotes } from "#db/notes";

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send(getNotes());
});

router.post("/", (req, res, next) => {
  if (!req.body) {
    return res.status(400).send("Request must have a body"); // return statement necessary here to prevent below code from running if condition is true
  }
  if (!req.body.text) {
    return res.status(400).send("New note must have text.");
  }
  const newNote = addNote(req.body.text);
  return res.status(201).send(newNote);
});

router.get("/:id", (req, res) => {
  res.status(200).send("TODO: /notes/:id");
});

export default router;
