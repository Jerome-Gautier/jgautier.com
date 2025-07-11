import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-css3-icon',
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 128 128"
      [class]="class"
    >
      <!-- Icon from Devicon Plain by konpa - https://github.com/devicons/devicon/blob/master/LICENSE -->
      <path
        fill="inherit"
        d="m8.76 1l10.055 112.883l45.118 12.58l45.244-12.626L119.24 1zm89.591 25.862l-3.347 37.605l.01.203l-.014.467v-.004l-2.378 26.294l-.262 2.336L64 101.607v.001l-.022.019l-28.311-7.888L33.75 72h13.883l.985 11.054l15.386 4.17l-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043l-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041l-.63-7.131L29.401 23h69.281z"
      />
    </svg>
  `,
  styles: ``,
})
export class Css3IconComponent {
  @Input() class = '';
}
