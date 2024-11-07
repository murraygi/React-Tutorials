import React from "react";

const dateYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p>Copyright ⓒ Murray Giudici {dateYear}</p>
    </div>
  );
}

export default Footer;
