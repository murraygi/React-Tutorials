import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((createNote) => (
        <Note
          key={createNote.key}
          title={createNote.title}
          content={createNote.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
