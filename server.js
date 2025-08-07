import app from "#app";
import notesRouter from "#api/notes";
const PORT = 3000;

app.use("/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

export default app;
