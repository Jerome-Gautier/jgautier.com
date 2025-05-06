import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Project, projects } from '../../../../../../public/fcc-projects';
import {
  slideAnimation,
  staggerFadeInAnimation,
} from '../../../../../animations/slide.animation';
import { transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-fcc-projects',
  imports: [NgFor],
  animations: [
    trigger('slideToggle', [
      transition(':enter', [useAnimation(slideAnimation)]),
    ]),
    trigger('staggerSlideToggle', [
      transition(':enter', [useAnimation(staggerFadeInAnimation)]),
    ]),
  ],
  template: `
    <section id="portfolio-section" class="bg-gray-100">
      <div
        class="flex justify-center items-center max-w-3xl md:h-[80px] h-[125px] my-3 mx-auto px-4"
      >
        <div>
          <div
            [@slideToggle]="{
          value: null,
          params: {
            time: '600ms',
            axis: 'X',
            enterStart: '-50vw',
          },
        }"
            class="w-full h-[2px] bg-aqua-green mx-auto mb-2"
          ></div>
          <p
            [@slideToggle]="{
          value: null,
          params: {
            time: '600ms',
            axis: 'X',
            enterStart: '50vw',
          },
        }"
            class="text-gray-600 max-w-2xl mx-auto"
          >
            Une partie des projets que j'ai conçu pour passer mes
            <a
              href="https://www.freecodecamp.org/jgautier"
              target="_blank"
              class="font-semibold"
              >accréditations de développeur web</a
            >
            sur l'excellente plateforme d'apprentissage
            <a
              href="https://www.freecodecamp.org/"
              targer="_blank"
              class="font-semibold"
              >freeCodeCamp</a
            >.
          </p>
          <div
            [@slideToggle]="{
          value: null,
          params: {
            time: '600ms',
            axis: 'X',
            enterStart: '-50vw',
          },
        }"
            class="w-full h-[2px] bg-aqua-green mx-auto mt-2"
          ></div>
        </div>
      </div>

      <div
        [@staggerSlideToggle]="{
          value: null,
          params: {
            time: '400ms',
            axis: 'Y',
            enterStart: '200%',
          }
        }"
        class="fcc-container"
      >
        <div
          *ngFor="let project of projects"
          class="w-[360px] bg-gray-300 p-2 rounded-lg shadow-md overflow-hidden cursor-pointer hover:bg-royal-blue hover:text-white transition time-300 ease-in-out"
        >
          <a href="{{ project.url }}" target="_blank">
            <img
              [src]="project.imgUrl"
              [alt]="project.name"
              class="w-full h-48 object-cover"
            />
            <div class="pt-4 pb-2">
              <h3 class="text-lg font-semibold mb-2">{{ project.name }}</h3>
              <div class="flex space-x-2">
                <span
                  *ngFor="let tech of project.technologies"
                  class="px-2 py-1 bg-white text-gray-800 border border-gray-400 rounded-md text-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
  .fcc-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    max-width: 1200px;
    height: 90vh;
    padding: 12px;
    margin: 0 auto;
    background-color: #ffffff98;
    border: 2.5px solid transparent;
    border-radius: 8px;
    transition: all 0.4s ease-in-out;
    overflow-y: auto;
  }`,
})
export class FccprojectsComponent {
  projects: Project[] = projects;
}
