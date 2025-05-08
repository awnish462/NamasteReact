// const heading=React.createElement("h1",{},"Hi i'm h1 tag");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Nested html structure

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ])
]

);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(parent);