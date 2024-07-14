import React from "react";
import ReactDOM from "react-dom";
// const heading = React.createElement("h1", {id: "heading1", xyz: "h-one"}, "hello world from React!");

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//nested tags
/* 
<div id ="parent">
  <div id = "child">
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>
  <div id = "child2">
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>
</div> 

ReactElement(Object) => HTML(Browser Understands)
*/


//looks mess -- we will do it using jsx later
const parent = React.createElement("div", {id:"parent"},[ 
  React.createElement("div", {id:"child"},
    React.createElement("h1", {}, "I'm an h1 tag")
  ),
  
  React.createElement("div", {id:"child2"},[
    //adding 2 elements at the same level under the same parent tag
    React.createElement("h2", {}, "I'm an h2 tag"),
    React.createElement("h3", {}, "I'm an h3 tag"),
  ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

