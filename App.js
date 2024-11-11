{/* <div id ="parent">
    <div id = "child1">
        <h1>i am h1 from child 1</h1>
        <h2>i am h2 from child 1</h2>
    </div>
    <div id = "child2">
        <h1>i am h1 from child 2</h1>
        <h2>i am h2 from child 2</h2>
    </div>
</div> */}
import React from "react";
import ReactDOM from "react-dom/client";

const parent = [React.createElement(
    "div",
    {id:"child1"},
    [React.createElement("h1",{},"i am h1 from child1"), 
        React.createElement("h2",{},"i am h2 from child1")
    ]),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"i am h1 from child2"), 
            React.createElement("h2",{},"i am h2 from child2")
        ])
]
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
