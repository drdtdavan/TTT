import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  render() {
    return (
      <div>
       
        <main>
          <stencil-router>
            <stencil-route url='/' component='app-board' exact={true}>
            </stencil-route>
          </stencil-router>
        </main>
      </div>
    );
  }
}
