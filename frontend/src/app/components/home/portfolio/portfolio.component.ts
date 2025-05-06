import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProfessionalComponent } from './professional/professional.component';
import { PersonalComponent } from './personal/personal.component';
import { FccprojectsComponent } from './fcc-projects/fcc-projects.component';
import { ScrollObserverService } from '../../../services/scroll-observer.service';
import { transition, trigger, useAnimation } from '@angular/animations';
import { staggerSlideAnimation } from '../../../../animations/slide.animation';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProfessionalComponent,
    PersonalComponent,
    FccprojectsComponent,
    NgIf,
  ],
  animations: [
    trigger('staggerSlideToggle', [
      transition(':enter', [useAnimation(staggerSlideAnimation)]),
    ]),
  ],
  template: `
    <section id="portfolio-section" class="bg-gray-100 pb-20">
      <div
        class="h-[200px]"
      >
        <div
          *ngIf="scrollObserver.portfolioShown"
          [@staggerSlideToggle]="{
          value: null,
          params: {
            time: '400ms',
            axis: 'Y',
            enterStart: '200%',
          }
        }"
        class="h-full flex flex-col justify-end align-center gap-8 text-center"
        >
          <h2 class="text-4xl font-bold text-gray-800">Projets Récents</h2>
          <div class="flex justify-center">
            <div class="marker"></div>
            <button
              (click)="changeSelected('professional')"
              [class.active]="selected === 'professional'"
              class="professional-btn py-2 w-[125px] text-center text-gray-800 hover:bg-gray-300 cursor-pointer transition time-300 ease-in-out"
            >
              Professionnels
            </button>
            <button
              (click)="changeSelected('personal')"
              [class.active]="selected === 'personal'"
              class="personal-btn py-2 w-[125px] text-center text-gray-800 hover:bg-gray-300 cursor-pointer transition time-300 ease-in-out"
            >
              Personnels
            </button>
            <button
              (click)="changeSelected('fcc')"
              [class.active]="selected === 'fcc'"
              class="fcc-btn py-2 w-[125px] text-center text-gray-800 hover:bg-gray-300 cursor-pointer transition time-300 ease-in-out"
            >
              Projects FCC
            </button>
          </div>
        </div>
      </div>
      <div>
          @if (selected === "professional") {
          <app-professional [shown]="scrollObserver.portfolioShown" />
          } @else if (selected === "fcc") {
          <app-fcc-projects />
          } @else if (selected === "personal") {
          <app-personal />
          }
      </div>
    </section>
  `,
  styles: `
  button.active {
    background-color: var(--slate-grey);
    color: white;
  }`,
})
export class PortfolioComponent {
  scrollObserver = inject(ScrollObserverService);
  selected: string = 'professional';

  changeSelected(selected: string) {
    this.selected = selected;
  }
}
