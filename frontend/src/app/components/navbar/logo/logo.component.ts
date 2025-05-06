import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [CommonModule],
  template: `
    <a 
      href="#hero-section" 
      class="font-robotoregular font-bold text-white lg:text-4xl text-3xl mx-4 tracking-widest overflow-hidden"
    >
      <span [ngClass]="{'golden': isFixed}">J</span>
      <span class="dis-span-1" [ngClass]="{'inactive': isFixed}">érôme</span>
      <span class="transleft" [ngClass]="{'active': isFixed, 'golden': isFixed}">G</span>
      <span class="dis-span-2" [ngClass]="{'inactive': isFixed}">autier</span>
    </a>
  `,
  styles: `
    span {
        display: inline-block;
    }

    span.golden {
        font-size: 32px;
        color: goldenrod;
        transform: translateY(-5px);
    }

    .transleft {
        transition: all 0.3s linear;
    }

    .transleft.active {
        color: goldenrod;
        transform: translateX(-140px);
    }

    .dis-span-1 {
        margin-right: 16px;
        transition: all 0.3s linear;
    }
    .dis-span-1.inactive {
        opacity: 0;
        transform: translateX(200px);
    }

    .dis-span-2 {
        transition: all 0.3s linear;
    }

    .dis-span-2.inactive {
        opacity: 0;
        transform: translateX(-200px);
    }

    @media (max-width: 1023px) {
      .transleft.active {
        transform: translateX(-120px);
      }
    }
  `
})
export class LogoComponent {
  @Input() isFixed: boolean = false;
}