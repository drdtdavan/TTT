/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppBoard {
    clickedHandler(event) {
        this.board[event.detail] = "X";
        this.board = Object.assign({}, this.board);
        console.log(this.board);
    }
    componentWillLoad() {
        this.board = {
            1: ".",
            2: ".",
            3: ".",
            4: ".",
            5: ".",
            6: ".",
            7: ".",
            8: ".",
            9: "."
        };
    }
    render() {
        return (h("div", null,
            h("div", null,
                h("app-square", { val: "1", XO: this.board[1] }),
                h("app-square", { val: "2", XO: this.board[2] }),
                h("app-square", { val: "3", XO: this.board[3] })),
            h("div", null,
                h("app-square", { val: "4", XO: this.board[4] }),
                h("app-square", { val: "5", XO: this.board[5] }),
                h("app-square", { val: "6", XO: this.board[6] })),
            h("div", null,
                h("app-square", { val: "7", XO: this.board[7] }),
                h("app-square", { val: "8", XO: this.board[8] }),
                h("app-square", { val: "9", XO: this.board[9] }))));
    }
    static get is() { return "app-board"; }
    static get properties() { return {
        "board": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "clicked",
            "method": "clickedHandler"
        }]; }
}

class AppSquare {
    btnClicked() {
        this.clicked.emit(this.val);
    }
    render() {
        return (h("button", { onClick: () => this.btnClicked() }, this.XO));
    }
    static get is() { return "app-square"; }
    static get properties() { return {
        "val": {
            "type": String,
            "attr": "val"
        },
        "XO": {
            "type": String,
            "attr": "x-o"
        }
    }; }
    static get events() { return [{
            "name": "clicked",
            "method": "clicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "button{\n  color:white;\n  background-color: black; \n  width:100px;\n  height:100px;  \n  font-size: 50px;\n  border-style: solid; \n  border-color:white;\n  border-width: 1px;\n  padding: 0px;\n  margin: 0px;\n-webkit-box-sizing: border-box;\nbox-sizing: border-box;\n}\n\nbutton:hover{\n  border-color:yellow;\n}"; }
}

export { AppBoard, AppSquare };
