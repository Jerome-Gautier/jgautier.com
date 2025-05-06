import { Component, Input } from '@angular/core';
import { Html5IconComponent } from '../../../icons/html5-icon/html5-icon.component';
import { Css3IconComponent } from '../../../icons/css3-icon/css3-icon.component';
import { JavascriptIconComponent } from '../../../icons/javascript-icon/javascript-icon.component';
import { TypescriptIconComponent } from '../../../icons/typescript-icon/typescript-icon.component';
import { SvelteIconComponent } from '../../../icons/svelte-icon/svelte-icon.component';
import { ReactIconComponent } from '../../../icons/react-icon/react-icon.component';
import { AngularIconComponent } from '../../../icons/angular-icon/angular-icon.component';
import { WordpressIconComponent } from '../../../icons/wordpress-icon/wordpress-icon.component';
import { TailwindcssIconComponent } from '../../../icons/tailwindcss-icon/tailwindcss-icon.component';

@Component({
  selector: 'app-frontend',
  imports: [
    Html5IconComponent,
    Css3IconComponent,
    JavascriptIconComponent,
    TypescriptIconComponent,
    SvelteIconComponent,
    ReactIconComponent,
    AngularIconComponent,
    WordpressIconComponent,
    TailwindcssIconComponent,
  ],
  template: `
    <h3 class="font-robotoregular text-2xl font-semibold mb-4 tracking-widest">
      Frontend
    </h3>
    <p>
      Ma préférence est de coder mes sites/applications de A à Z mais j'ai
      également de solides connaissances en WordPress.
    </p>
    <h4 class="font-robotoregular text-xl font-medium mt-8 mb-4 tracking-wide">
      Langages
    </h4>
    <ul class="flex flex-row flex-wrap justify-start gap-4">
      <li>
        <app-html5-icon />
        <p>HTML5</p>
      </li>
      <li>
        <app-css3-icon />
        <p>CSS3</p>
      </li>
      <li>
        <app-tailwindcss-icon />
        <p>Tailwind CSS</p>
      </li>
      <li>
        <app-javascript-icon />
        <p>Javascript</p>
      </li>
      <li>
        <app-typescript-icon />
        <p>Typescript</p>
      </li>
    </ul>

    <h4 class="font-robotoregular text-xl font-medium mt-8 mb-4 tracking-wide">
      Outils favoris
    </h4>
    <ul class="flex flex-row flex-wrap justify-start gap-4">
      <li>
        <app-react-icon />
        <p>React</p>
      </li>
      <li>
        <app-svelte-icon />
        <p>Svelte</p>
      </li>
      <li>
        <app-angular-icon />
        <p>Angular</p>
      </li>
      <li>
        <app-wordpress-icon />
        <p>WordPress</p>
      </li>
    </ul>
  `,
  styles: ``,
})
export class FrontendComponent {}
