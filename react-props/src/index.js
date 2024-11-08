import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} alt="avatar_img" />
      <p>{props.mobile}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      mobile="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      mobile="+987 654 321"
      email="jack@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);
