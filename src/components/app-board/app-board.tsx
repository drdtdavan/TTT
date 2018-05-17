import { Component } from "@stencil/core";

@Component({
  tag: "app-board",
  
})
export class AppBoard {
  render() {
    return (
      <div>
        <div>
          <app-square> </app-square>
          <app-square> </app-square>
          <app-square> </app-square>
        </div>
        <div>
          <app-square> </app-square>
          <app-square> </app-square>
          <app-square> </app-square>
        </div>
        <div>
          <app-square> </app-square>
          <app-square> </app-square>
          <app-square> </app-square>
        </div>
      </div>
    );
  }
}
