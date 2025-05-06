import { Component, inject, Renderer2 } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { ScrollObserverService } from '../../services/scroll-observer.service';
import {
  trigger,
  transition,
  style,
  animate,
  AnimationEvent,
  state,
  useAnimation,
} from '@angular/animations';
import { NgIf } from '@angular/common';
import { slideAnimation } from '../../../animations/slide.animation';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, NavListComponent, NgIf],
  animations: [
    trigger('slideToggle', [
      state('in', style({ transform: 'translate(0)' })),
      transition(':enter', [useAnimation(slideAnimation)]),
    ]),
    trigger('navTransition', [
      transition('false => true', [
        style({
          position: 'fixed',
          transform: 'translateY(-100%)',
        }),
        animate('400ms ease-in', style({ transform: 'translateY(0)' })),
      ]),
      transition('true => false', [
        animate('200ms ease-out', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
  template: `
    <header
      *ngIf="scrollObserver.activeSection"
      [@navTransition]="scrollObserver.isFixed"
      (@navTransition.start)="onNavbarSlideStart($event)"
      (@navTransition.done)="onNavbarSlideEnd($event)"
      [class.active]="navActive"
      class="absolute top-0 left-0 w-full text-white h-20 lg:px-8 px-0 bg-transparent z-1001"
    >
      <nav class="relative flex justify-between items-center w-full h-full">
        <app-logo
          [isFixed]="navbarIsFixed"
          [@slideToggle]="{
            value: null,
            params: { time: '600ms', axis: 'X', enterStart: '-100%' }
          }"
          (@slideToggle.done)="onEnterLogoEnd($event)"
        />
        <app-nav-list
          [activeSection]="scrollObserver.activeSection"
          [@slideToggle]="{
            value: null,
            params: { time: '600ms', axis: 'X', enterStart: '100%' }
          }"
          class="flex justify-center align-center"
        />
      </nav>
    </header>
  `,
  styles: `
  header {
    position: absolute;
    overflow: hidden;
  }

  header.active {
    overflow: visible;    
  }

  header.fixed {
    position: fixed;
    height: 40px;
    background: linear-gradient(to right, #0b1120 0%, #141a2d 50%, #0b1120 100%);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(9, 180, 185, 0.15);
    z-index: 1000;
  }

  @media (max-width: 1024px) {
    header.fixed::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--aqua-green, #09B4B9) 50%, transparent);
      opacity: 0.6;
    }
  }
  `,
})
export class NavbarComponent {
  scrollObserver = inject(ScrollObserverService);
  navActive: boolean = false;
  navbarIsFixed: boolean = false;

  constructor(private renderer: Renderer2) {}

  protected onEnterLogoEnd(event: AnimationEvent) {
    this.navActive = true;
  }

  protected onNavbarSlideStart(event: AnimationEvent) {
    if (this.scrollObserver.isFixed) {
      this.navbarIsFixed = true;
      this.renderer.addClass(event.element, 'fixed');
    }
  }

  protected onNavbarSlideEnd(event: AnimationEvent) {
    if (!this.scrollObserver.isFixed) {
      this.navbarIsFixed = false;
      this.renderer.removeClass(event.element, 'fixed');
    }
  }
}