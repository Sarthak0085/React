const heading = React.createElement("div", { id: "div1" }, React.createElement("div", { id: "div2" }, [
    React.createElement("h1", { id: "heading1" }, "This is h1 text."),
    React.createElement("h2", { id: "heading2" }, "This is h2 text.")
]));


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);