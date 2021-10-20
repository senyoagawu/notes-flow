import React, { useState } from "react";
import Note from "./Note";
import NotesForm from "./NotesForm.js";
import "./index.css";
// import { notes } from "./notes.json";
import { fetchNotes } from "./actions";

export default function NoteContainer() {
  const notes = fetchNotes();
  const [_, rerender] = useState(); //ever want to trigger a rerender?

  new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date());

  return (
    <div className="container">
      <header></header>
      <aside>
        <button id="button-left">&lt;</button>
      </aside>
      <main>
        <span className="app-name">
          Tiny
          <span id="app-name" style={{ color: "rgb(255, 171,0)" }}>
            Notes
          </span>
        </span>
        <div id="display">
          <div id="notebook" style={{ border: "5px solid rgb(255, 171, 0)" }}>
            {notes &&
              notes.map((note) => (
                <Note rerender={rerender} key={note.id} note={note} />
              ))}
          </div>
        </div>
        <NotesForm />
      </main>
      <aside>
        <button id="button-right">&gt;</button>
      </aside>

      <footer></footer>
    </div>
  );
}
