import { Component } from '@angular/core';
import { slideAnimation } from '../../../../../animations/slide.animation';
import { transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-personal',
  imports: [],
  animations: [
    trigger('slideToggle', [
      transition(':enter', [slideAnimation])
    ])
  ],
  template: `
    <section class="bg-gray-100">
      <div class="h-[40px]"></div>
      <a
        [@slideToggle]="{
          value: null,
          params: {
            time: '600ms',
            axis: 'X',
            enterStart: '-25vw',
          },
        }"
        href="/"
        class="project image-left"
      >
        <div class="preview">
          <img src="/images/timekeeper/timekeeper_main.png" alt="Timekeeper" />
        </div>
        <div class="content">
          <h3>
            <span class="title">Timekeeper</span>
            <span class="arrow">⇒</span>
          </h3>
          <p>
            Un simple minuteur Pomodoro qui enregistre le temps passé sur un
            projet et offre lap ossibilité d'exporter les données vers un
            fichier Xlsx.
          </p>
          <p>Codé à partir de zéro avec SolidJs.</p>
        </div>
      </a>

      <a
        [@slideToggle]="{
          value: null,
          params: {
            time: '600ms',
            axis: 'X',
            enterStart: '25vw',
          },
        }"
        href="/"
        class="project image-right"
      >
        <div class="preview">
          <img
            src="/images/workoutcalendar/workoutcalendar_main.png"
            alt="Workout Calendar"
          />
        </div>
        <div class="content">
          <h3>
            <span class="title">CBD Liberté</span>
            <span class="arrow">⇒</span>
          </h3>
          <p>
            Un calendrier intéractif destiné au suivi de performances dans le
            cadre d'entrainements de musculation.
          </p>
          <p>Egalement codé entièrement à la main avec SolidJs.</p>
        </div>
      </a>
    </section>
  `,
  styles: ``,
})
export class PersonalComponent {

}
