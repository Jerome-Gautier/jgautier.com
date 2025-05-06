import { Component, inject } from '@angular/core';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { ScrollObserverService } from '../../../services/scroll-observer.service';
import { NgIf } from '@angular/common';
import { transition, trigger, useAnimation } from '@angular/animations';
import {
  slideAnimation,
  staggerSlideAnimation,
} from '../../../../animations/slide.animation';

@Component({
  selector: 'app-about',
  imports: [FrontendComponent, BackendComponent, NgIf],
  animations: [
    trigger('slideToggle', [
      transition(':enter', [useAnimation(slideAnimation)]),
    ]),
    trigger('staggerSlideToggle', [
      transition(':enter', [useAnimation(staggerSlideAnimation)]),
    ]),
  ],
  template: `
    <section id="about-section" class="text-white">
      <div id="intro-section" class="flex justify-center items-center sm:h-[700px] h-[1000px]">
        <div class="relative max-w-screen-sm mx-auto">
          <div *ngIf="scrollObserver.introShown" class="relative p-8">
            <div
              [@slideToggle]="{
              value: null,
              params: {
                time: '600ms',
                axis: 'X',
                enterStart: '-25vw',
              },
            }"
              class="absolute w-[72px] h-[72px] top-0 left-0 border-l-2 border-t-2 border-aqua-green "
            ></div>
            <div
              [@slideToggle]="{
              value: null,
              params: {
                time: '600ms',
                axis: 'X',
                enterStart: '25vw',
              },
            }"
              class="absolute w-[72px] h-[72px] bottom-0 right-0 border-r-2 border-b-2 border-royal-blue "
            ></div>
            <div
              [@staggerSlideToggle]="{
              value: null,
              params: {
                time: '400ms',
                axis: 'Y',
                enterStart: '100%',
              }
            }"
            >
              <h2
                class="text-3xl text-[1.8rem] tracking-wide font-semibold mb-4 font-robotoregular"
              >
                Mon profil, mes compétences
              </h2>
              <p class="mb-4 text-[1.25rem] font-latoregular leading-snug">
                Je réside dans le sud-est de la France mais j'ai également vécu
                une année en Angleterre pour raisons professionnelles. Je parle
                couramment l'anglais et le français et j'apprends actuellement
                le russe.
              </p>
              <p class="mb-4 text-[1.25rem] font-latoregular leading-snug">
                J'aime coder, avec un intérêt prononcé pour Javascript. Mon
                approche du développement web est holistique et je prends en
                compte dans mes projets l'accessibilité, l'évolutivité, les
                performances et le SEO.
              </p>
              <p class="text-[1.25rem] font-latoregular leading-snug">
                J'ai un ensemble de compétences polyvalentes qui me permettent
                de gérer chaque projet de la conception de son design jusqu'à
                son déploiement et par la suite d'assurer sa maintenance. Je
                suis également habitué à travailler en équipe et peut si
                nécessaire collaborer avec d'autres développeurs ou designers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="frontend-section" class="skills">
        <app-frontend
          *ngIf="scrollObserver.frontendShown"
          [@staggerSlideToggle]="{
              value: null,
              params: {
                time: '400ms',
                axis: 'X',
                enterStart: '50vw',
              }
            }"
        />
      </div>
      <div id="backend-section" class="skills">
        <app-backend
          *ngIf="scrollObserver.backendShown"
          [@staggerSlideToggle]="{
              value: null,
              params: {
                time: '400ms',
                axis: 'X',
                enterStart: '50vw',
              }
            }"
        />
      </div>
    </section>
  `,
  styles: ``,
})
export class AboutComponent {
  scrollObserver = inject(ScrollObserverService);
}
