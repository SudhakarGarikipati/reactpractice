const header = React.createElement("h2", {
    id: "heading",
    nm: "hdr2",
    color: "red",
    key: "h2"
}, "Header elmenet from react create");
const header3 = React.createElement("h3", {
    id: "heading3",
    nm: "hdr2",
    color: "red",
    key: "h3"
}, "Header3 elmenet from react create");
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    header,
    header3
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=myreactlearning.7c0ccee6.js.map
