import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//let curDate = new Date();
let curDate = new Date(2020, 5, 5, 15);
curDate = curDate = curDate.getHours();
let greeting = "";
//creating an cssstyle  object
const cssStyle = {};
if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "Black";
}
ReactDOM.render(
  <h1>Hello Sir,{greeting}</h1>,
  // <>
  // <div>
  //   <h1>
  //     Hello Sir, {curDate}<span style={cssStyle}>{greeting}</span>
  //   </h1>,
     document.getElementById("root")
  // </div>
  // </>
);
