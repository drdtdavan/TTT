import { Component, Listen, State } from "@stencil/core";

@Component({
  tag: "app-board"
})
export class AppBoard {
  @State()board: any;
  @Listen("clicked")  
  clickedHandler(event: CustomEvent) {
    this.board[event.detail] = "X";
    this.board = { ...this.board };
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
    return (
      <div>
        <div>
          <app-square val="1" XO={this.board[1]} />
          <app-square val="2" XO={this.board[2]} />
          <app-square val="3" XO={this.board[3]} />
        </div>
        <div>
          <app-square val="4" XO={this.board[4]} />
          <app-square val="5" XO={this.board[5]} />
          <app-square val="6" XO={this.board[6]} />
        </div>
        <div>
          <app-square val="7" XO={this.board[7]} />
          <app-square val="8" XO={this.board[8]} />
          <app-square val="9" XO={this.board[9]} />
        </div>
      </div>
    );
  }
}
