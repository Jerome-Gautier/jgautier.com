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
            projet et offre la possibilité d'exporter les données vers un
            fichier Xlsx.
          </p>
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
            <span class="title">Workout Calendar</span>
            <span class="arrow">⇒</span>
          </h3>
          <p>
            Un calendrier intéractif destiné au suivi de performances dans le
            cadre d'entrainements de musculation.
          </p>
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
        href="https://nationforcedgraph.jgautier.com/"
        target="_blank"
        class="project image-left"
      >
        <div class="preview">
          <img
            src="/images/forcedirectedgraph-screenshot.png"
            alt="Workout Calendar"
          />
        </div>
        <div class="content">
          <h3>
            <span class="title">Nations contiguity with force directed graph</span>
            <span class="arrow">⇒</span>
          </h3>
          <p>Un graphique animé représentant les relations de contiguïté entre les pays du monde, ainsi qu'un onglet de recherche pour trouver et sélectionner rapidement un pays spécifique.</p>
          <p>La structure de l'application est basée sur Angular, la visualisation des données et la "simulation de force" par la bibliothèque graphique D3.js.</p>
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
        href="https://gameoflife.jgautier.com/"
        target="_blank"
        class="project image-right"
      >
        <div class="preview">
          <img
            src="/images/gameoflife-screenshot.png"
            alt="Workout Calendar"
          />
        </div>
        <div class="content">
          <h3>
            <span class="title">Conway's Game of Life</span>
            <span class="arrow">⇒</span>
          </h3>
          <p>
            Le jeu de la vie de Conway est un automate cellulaire inventé en 1970 par le mathématicient britannique John Horton Conway. Il s'agit d'un jeu à deux dimensions, où chaque cellule peut être vivante ou morte, et évolue en fonction de règles simples - pourtant capables de produire des comportement complexes et imprévisibles.
          </p>
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
        href="https://dungeoncrawler.jgautier.com/"
        target="_blank"
        class="project image-left"
      >
        <div class="preview">
          <img
            src="/images/dungeoncrawler-screenshot.png"
            alt="Dungeon Crawler"
          />
        </div>
        <div class="content">
          <h3>
            <span class="title">Roguelike Dungeon Crawler</span>
            <span class="arrow">⇒</span>
          </h3>
          <p>Un Roguelike 2D rétro développé avec Angular, avec génération procédurale de la carte, collecte de sorts et d'objects et gain d'expérience.</p>
          <p>L'objectif est d'explorer et d'accumuler assez de ressources pour vaincre le boss final et atteindre la fin de la carte.</p>
        </div>
      </a>
    </section>
  `,
  styles: ``,
})
export class PersonalComponent {

}
