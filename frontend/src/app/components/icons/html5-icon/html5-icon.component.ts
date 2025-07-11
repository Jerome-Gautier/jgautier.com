import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-html5-icon',
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
        d="m9.032 2l10.005 112.093l44.896 12.401l45.02-12.387L118.968 2zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471l-3.233 36.119l-.238 2.27L64 102.609v.002l-.034.018l-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939z"
      ></path>
    </svg>
  `,
  styles: ``,
})
export class Html5IconComponent {
  @Input() class = "";  
}
