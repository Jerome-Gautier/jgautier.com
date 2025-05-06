import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ScrollObserverService } from '../../../services/scroll-observer.service';
import { transition, trigger, useAnimation } from '@angular/animations';
import { slideAnimation, staggerSlideAnimation } from '../../../../animations/slide.animation';

@Component({
  selector: 'app-hero',
  imports: [NgIf],
  animations: [
    trigger('slideToggle', [
      transition(':enter', [useAnimation(slideAnimation)]),
    ]),
    trigger('staggerSlideToggle', [
      transition(':enter', [useAnimation(staggerSlideAnimation)]),
    ]),
  ],
  template: `
    <section
      id="hero-section"
      class="flex justify-center items-center relative text-white md:px-8 px-0 min-h-screen"
    >
      <div
        class="flex flex-col justify-between md:w-[914px] w-[100%] h-[755px] bg-black/50 rounded-xl mb-20 mt-20 mx-auto z-500"
      >
        <div
          *ngIf="scrollObserver.heroShown"
          class="flex flex-col justify-center items-center max-w-screen-lg h-[420px] text-center"
        >
          <h1
            [@slideToggle]="{
              value: scrollObserver.heroShown,
              params: {
                time: '600ms',
                axis: 'X',
                enterStart: '-100%'
              }
            }"
            class="font-latoregular text-4xl md:text-5xl tracking-wide my-6"
          >
            Designer & Développeur Fullstack
          </h1>
          <p
            [@slideToggle]="{
              value: scrollObserver.heroShown,
              params: {
                time: '600ms',
                axis: 'X',
                enterStart: '100%'
              }
            }"
            class="font-latoregular text-xl md:text-3xl tracking-wide text-aqua-green my-6"
          >
            Des applications web intuitives et performantes
          </p>
        </div>
        <div *ngIf="scrollObserver.heroShown" class="flex flex-row">
          <div
            [@slideToggle]="{
              value: scrollObserver.heroShown,
              params: {
                time: '600ms',
                axis: 'Y',
                enterStart: '-100%'
              }
            }"
            class="w-[2px] sm:h-[325px] h-[400px] bg-aqua-green sm:ml-10 ml-4 sm:mr-8 mr-4"
          ></div>
          <div
            [@staggerSlideToggle]="{
              value: scrollObserver.heroShown,
              params: {
                time: '600ms',
                axis: 'X',
                enterStart: '100%',
              }
            }"
            class="flex flex-col justify-center md:w-[760px] sm:h-[325px] h-[400px] text-left space-y-12"
          >
            <div>
              <p class="font-latoregular text-xl tracking-widest">
                Gestion de Projets Web
              </p>
              <p class="font-robotoregular tracking-[1px]">
                Site vitrine, événementiel, e-commerce
              </p>
            </div>
            <div>
              <p class="font-latoregular text-xl tracking-widest">
                Design réactif et dynamique
              </p>
              <p class="font-robotoregular tracking-[1px]">
                Produit compatible sur tous supports, animations attractives et
                non-intrusives
              </p>
            </div>
            <div>
              <p class="font-latoregular text-xl tracking-widest">
                Référencement naturel
              </p>
              <p class="font-robotoregular tracking-[1px]">
                Navigation rapide et contenu adapté au secteur cible, pour un
                référencement optimal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class HeroComponent {
  scrollObserver = inject(ScrollObserverService);

  ngAfterViewInit(): void {
    if (document.getElementById('hero-section')) {
      this.scrollObserver.initialize();
    }
  }
}