/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppBoard {
    render() {
        return (h("div", null,
            h("div", null,
                h("app-square", null, " "),
                h("app-square", null, " "),
                h("app-square", null, " ")),
            h("div", null,
                h("app-square", null, " "),
                h("app-square", null, " "),
                h("app-square", null, " ")),
            h("div", null,
                h("app-square", null, " "),
                h("app-square", null, " "),
                h("app-square", null, " "))));
    }
    static get is() { return "app-board"; }
}

class AppSquare {
    render() {
        return (h("button", null, "x"));
    }
    static get is() { return "app-square"; }
    static get style() { return "button{\n  background-color: black; \n  width:20em;\n  height:20em;  \n  border-style: solid; \n  border-color:white;\n  border-width: 5px;\n}\n\nbutton:hover{\n  border-color:yellow;\n}"; }
}

export { AppBoard, AppSquare };
