import app from "#app";
import { addNote, getNoteById, getNotes } from "#db/notes";
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

app.get("/", (req, res) => {
  addNote("baba booey");
  res.status(200).send(getNotes());
});
