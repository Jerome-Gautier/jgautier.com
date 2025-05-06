import { Component } from '@angular/core';

@Component({
  selector: 'app-circle-left',
  imports: [],
  template: ` <div class="circle-left"></div> `,
  styles: `
  .circle-left {
    position: absolute;
    width: 100vh;
    height: 100vh;
    top: 0;
    left: -105vh;
    border-radius: 50%;
    background: var(--aqua-green);
    filter: blur(15rem);
    opacity: 1;    
    z-index: 1;
    box-shadow:
    inset 0 0 50px #fff,
    inset 20px 0 80px var(--royal-blue),
    inset -20px 0 80px var(--aqua-green),
    inset 20px 0 300px var(--royal-blue),
    inset -20px 0 300px var(--aqua-green),
    0 0 50px #fff,
    -10px 0 80px var(--royal-blue),
    10px 0 80px var(--aqua-green);
  }
  @media (max-width: 768px) {
    .circle-left {
      top: calc(-10vh + 80px);
        }
  }`,
})
export class CircleLeftComponent {}
