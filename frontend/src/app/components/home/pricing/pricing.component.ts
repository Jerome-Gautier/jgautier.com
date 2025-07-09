import { Component, inject } from '@angular/core';
import { RatesCardComponent } from './rates/rates-card.component';
import { transition, trigger, useAnimation } from '@angular/animations';
import {
  slideAnimation,
  staggerSlideAnimation,
} from '../../../../animations/slide.animation';
import { NgIf } from '@angular/common';

import { ScrollObserverService } from '../../../services/scroll-observer.service';
import { ratesData, RatesData } from '../../../../../public/pricing';

@Component({
  selector: 'app-pricing',
  imports: [RatesCardComponent, NgIf],
  animations: [
    trigger('slideToggle', [
      transition(':enter', [useAnimation(slideAnimation)]),
    ]),
    trigger('staggerSlideToggle', [
      transition(':enter', [useAnimation(staggerSlideAnimation)]),
    ]),
  ],
  template: `
    <section id="pricing-section" class="pricing-container bg-white py-16">
      <div *ngIf="scrollObserver.pricingShown">
        <div class="text-center text-black max-w-[800px] mb-12 mx-auto">
          <h2
            class="text-4xl font-semibold font-robotoregular tracking-widest"
            [@slideToggle]="{
              value: scrollObserver.heroShown,
              params: {
                time: '500ms',
                axis: 'Y',
                enterStart: '150px'
              }
            }"
          >
            Tarifs
          </h2>
          <div
            class="w-[80px] h-[8px] bg-aqua-green mx-auto mt-4 rounded-tl-[50%_100%] rounded-tr-[50%_100%]"
            [@slideToggle]="{
              value: scrollObserver.heroShown,
              params: {
                time: '600ms',
                axis: 'X',
                enterStart: '-50vw'
              }
            }"></div>
          <div class="font-latoregular text-xl tracking-wide" [@slideToggle]="{
              value: scrollObserver.heroShown,
              params: {
                time: '600ms',
                axis: 'Y',
                enterStart: '150px',
              }
            }">
            <p class="mt-4">
              Les estimations ci-dessous varient naturellement en fonction des
              besoins et préférences. À tout moment du projet, vous disposerez
              d'une vue claire sur le temps engagé, et d'une livraison conforme
              au devis maîtrisé que nous aurons conçu ensemble avant d'engager
              le projet.
            </p>
            <p class="mt-2 ">
              Pour toute question ou demande de projet (devis gratuit) n'hésitez
              pas à
              <button (click)="scrollToContact()" class="text-blue-500 cursor-pointer hover:text-blue-700">
                me contacter &#8628;
              </button>
            </p>
          </div>
          <div
            class="w-[80px] h-[8px] bg-aqua-green mx-auto mt-4 rounded-bl-[50%_100%] rounded-br-[50%_100%]"
            [@slideToggle]="{
              value: scrollObserver.heroShown,
              params: {
                time: '600ms',
                axis: 'X',
                enterStart: '50vw'
              }
            }"></div>
        </div>

        <div
          class="flex flex-row gap-10 justify-center flex-wrap max-w-[1400px] mx-auto"
          [@staggerSlideToggle]="{
              value: scrollObserver.heroShown,
              params: {
                time: '600ms',
                axis: 'Y',
                enterStart: '400px',
              }
            }"
        >
          @for (item of ratesData; track item.id) {
          <app-rates-card [data]="item" />
          }
        </div>
      </div>
    </section>
  `,
  styles: `
  .pricing-container {
    height: 1432px;
    overflow-y: hidden;
  }
  
  @media (max-width: 1219px) {
    .pricing-container {
      height: 2464px;
    }
  }

  @media (max-width: 804px) {
    .pricing-container {
      height: 3408px;
    }
  }`,
})
export class PricingComponent {
  scrollObserver = inject(ScrollObserverService);
  ratesData: RatesData[] = ratesData;

  scrollToContact(): void {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if element not found
      window.location.href = '#contact-section';
    }
  }

  trackById(index: number, item: RatesData): number {
    return item.id;
  }
}
