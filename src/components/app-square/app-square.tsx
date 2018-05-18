import { Component, Prop, Event } from '@stencil/core';
import { EventEmitter } from 'events';


@Component({
  tag: 'app-square',
  styleUrl: 'app-square.css'
})
export class AppSquare {
  btnClicked(){
   this.clicked.emit(this.val)
  }
@Prop()val:string;
@Prop()XO:string;
@Event()clicked:EventEmitter;
  render() {
    return (
     <button onClick={()=>this.btnClicked()}>{this.XO}</button>
    );
  }
}
