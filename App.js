import React from "react";
import ReactDOM from "react-dom/client"

const heading1 = React.createElement("h1", {key: "5",}, "I'm an h1 tag");
const heading2 = React.createElement("h2", {key: "4",}, "I'm an h2 tag");
const child = React.createElement("div", { key: "3", id: "child" }, [heading1, heading2]);
const child2 = React.createElement("div", { key: "2", id: "child2" }, [heading1, heading2]);
const parent = React.createElement("div", { key: "1", id: "parent" }, [child, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 