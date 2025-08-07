import express from "express";
import { addNote, getNoteById, getNotes } from "#db/notes";

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send(getNotes());
});

router.post("/", (req, res, next) => {
  if (!req.body) {
    return res.status(400).send("Request must have a body."); // return statement necessary here to prevent below code from running if condition is true
  }
  if (!req.body.text) {
    return res.status(400).send("New note must have text.");
  }
  const newNote = addNote(req.body.text);
  return res.status(201).send(newNote);
});

router.get("/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  const note = getNoteById(parsedId);
  if (!note) {
    return res.status(404).send(`No note with id ${req.params.id} exists!`);
  }
  return res.status(200).send(note);
});

export default router;
