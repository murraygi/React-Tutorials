import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="food-pic"
        alt="hummus"
        src="https://cookingwithayeh.com/wp-content/uploads/2020/10/Best-Hummus.jpg"
      />
      <img
        className="food-pic"
        alt="tacos"
        src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-04-tacos%2Ftacos-490"
      />
      <img
        className="food-pic"
        alt="chocolate"
        src="https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg"
      />
      <img alt="random" src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
