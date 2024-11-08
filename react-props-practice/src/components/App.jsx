import React from "react";
import contacts from "./contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      <body>
        <h1 className="heading">My Contacts</h1>
        {contacts.map((contact) => (
          <Card
            key={contact.email}
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
          />
        ))}
      </body>
    </div>
  );
}

export default App;
