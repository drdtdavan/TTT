/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppSquare {
    render() {
        return (h("button", null));
    }
    static get is() { return "app-square"; }
    static get style() { return "button{\n  background-color: black; \n  width:20em;\n  height:20em;  \n  border-style: solid; \n  border-color:black;\n  border-width: 5px\n}\n\nbutton:hover{\n  border-color:yellow;\n}"; }
}

export { AppSquare };
