import { Component } from '@angular/core';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { AboutComponent } from '../../components/home/about/about.component';
import { PortfolioComponent } from '../../components/home/portfolio/portfolio.component';
import { PricingComponent } from '../../components/home/pricing/pricing.component';
import { ContactComponent } from '../../components/home/contact/contact.component';
import { CircleLeftComponent } from "../../components/home/circle-left/circle-left.component";
import { CircleRightComponent } from "../../components/home/circle-right/circle-right.component";

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    PortfolioComponent,
    PricingComponent,
    ContactComponent,
    CircleLeftComponent,
    CircleRightComponent
],
  template: `
    <div id="main-container" class="relative bg-primary-bg">
      <app-circle-left />
      <app-circle-right />
      <div class="circle-right"></div>
      <app-hero />
      <app-about />
      <app-portfolio />
      <app-pricing />
      <app-contact />
    </div>
  `,
  styles: `
  #main-container {
    position: relative;
    overflow-x: hidden;
  }
`,
})
export class HomeComponent {}