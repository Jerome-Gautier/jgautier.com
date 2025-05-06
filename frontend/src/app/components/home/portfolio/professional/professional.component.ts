import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { slideAnimation } from '../../../../../animations/slide.animation';
import { trigger, transition } from '@angular/animations';

@Component({
  selector: 'app-professional',
  imports: [NgIf],
  animations: [
    trigger('slideToggle', [transition(':enter', [slideAnimation])]),
  ],
  template: `
    <section class="bg-gray-100 h-[830px]">
      <div class="h-[40px]"></div>
      <a
        *ngIf="shown"
        [@slideToggle]="{
          value: null,
          params: {
            time: '600ms',
            axis: 'X',
            enterStart: '-25vw',
          },
        }"
        href="https://axiantis.com/"
        class="project image-left"
      >
        <div class="preview">
          <img src="/images/axiantis-screenshot.png" alt="Axiantis" />
        </div>
        <div class="content">
          <h3>
            <span class="title">Axiantis</span>
            <span class="arrow">⇒</span>
          </h3>
          <p>
            Design épuré et contenu calibré pour un référencement naturel
            optimal.
          </p>
        </div>
      </a>

      <a
        *ngIf="shown"
        [@slideToggle]="{
          value: null,
          params: {
            time: '600ms',
            axis: 'X',
            enterStart: '25vw',
          },
        }"
        href="https://cbdliberte.fr/"
        class="project image-right"
      >
        <div class="preview">
          <img src="/images/cbdliberte-screenshot.png" alt="CBD Liberté" />
        </div>
        <div class="content">
          <h3>
            <span class="title">CBD Liberté</span>
            <span class="arrow">⇒</span>
          </h3>
          <p>
            Un design simple de site d'e-commerce, avec possibilités pour les
            utilisateurs de créer un compte et toutes les options requises pour
            garantir des paiements sécurisés.
          </p>
        </div>
      </a>
    </section>
  `,
  styles: `
  section {
    height: 830px;
  }
  
  @media (max-width: 768px) {
    section {
      height: 1080px;
    }
  }`,
})
export class ProfessionalComponent {
  @Input() shown!: boolean;
}