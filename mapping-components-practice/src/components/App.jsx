import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia";

function createCard(card) {
  return (
    <Entry
      id={card.id}
      key={card.id}
      emoji={card.emoji}
      name={card.name}
      meaning={card.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
