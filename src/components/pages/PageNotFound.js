import React from "react";

function PageNotFound() {
  return (
    <div style={myStyle}>
      <h1>Page Not Found...</h1>
      <p className='lead'>The page you are looking for does not exist!</p>
    </div>
  );
}

const myStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "50vh",
};

export default PageNotFound;
