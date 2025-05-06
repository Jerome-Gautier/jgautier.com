import {
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollObserverService } from './services/scroll-observer.service';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />

    <router-outlet />

    <app-footer />
  `,
  styles: [],
})
export class AppComponent {
  scrollObserver = inject(ScrollObserverService);
  active: boolean = false;
  heroHeight: number | undefined = undefined;
  introHeight: number | undefined = undefined;
  frontendHeight: number | undefined = undefined;
  backendHeight: number | undefined = undefined;
  portfolioHeight: number | undefined = undefined;
  pricingHeight: number | undefined = undefined;
  contactHeight: number | undefined = undefined;

  private isInitialized: Subscription | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const heroSection = document.getElementById('hero-section');
    if (isPlatformBrowser(this.platformId) && heroSection) {
    }

    this.isInitialized = this.scrollObserver.isInitialized.subscribe(
      (isInitialized: boolean) => {
        // Add your logic here to handle when hero is shown/hidden
        // For example:
        if (isInitialized) {
          const heroSection = document.getElementById('hero-section');
          if (heroSection) {
            const scrollPosition = window.scrollY;
            const heroHeight = heroSection.offsetHeight;
            this.scrollObserver.changeIsFixed(scrollPosition > heroHeight / 2);

            this.updateElementsHeights();
            this.compareScrolling(scrollPosition);
            this.active = true;

            this.isInitialized?.unsubscribe();
            this.cdr.detectChanges();
          }
        }
      }
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateElementsHeights();
    const scrollPosition = window.scrollY;

    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      const heroHeight = heroSection.offsetHeight;
      this.scrollObserver.changeIsFixed(scrollPosition > heroHeight / 2);
    }

    // Determine the active section
    this.compareScrolling(scrollPosition);
  }

  private updateElementsHeights(): void {
    this.heroHeight = document
      .getElementById('hero-section')
      ?.getBoundingClientRect().height;
    this.introHeight = document
      .getElementById('intro-section')
      ?.getBoundingClientRect().height;
    this.frontendHeight = document
      .getElementById('frontend-section')
      ?.getBoundingClientRect().height;
    this.backendHeight = document
      .getElementById('backend-section')
      ?.getBoundingClientRect().height;
    this.portfolioHeight = document
      .getElementById('portfolio-section')
      ?.getBoundingClientRect().height;
    this.pricingHeight = document
      .getElementById('pricing-section')
      ?.getBoundingClientRect().height;
    this.contactHeight = document
      .getElementById('contact-section')
      ?.getBoundingClientRect().height;
  }

  private compareScrolling(y: number) {
    const windowHeight = window.innerHeight;

    if (
      this.heroHeight &&
      this.introHeight &&
      this.frontendHeight &&
      this.backendHeight &&
      this.portfolioHeight &&
      this.pricingHeight &&
      this.contactHeight
    ) {
      if (
        y >=
        this.heroHeight +
          this.introHeight +
          this.frontendHeight +
          this.backendHeight +
          this.portfolioHeight +
          this.pricingHeight -
          windowHeight * 0.7
      ) {
        this.scrollObserver.changeActiveSection('contact-section');
        return;
      }
      if (
        y >=
        this.heroHeight +
          this.introHeight +
          this.frontendHeight +
          this.backendHeight +
          this.portfolioHeight -
          windowHeight * 0.7
      ) {
        this.scrollObserver.changeActiveSection('pricing-section');
        return;
      }
      if (
        y >=
        this.heroHeight +
          this.introHeight +
          this.frontendHeight +
          this.backendHeight -
          windowHeight * 0.7
      ) {
        this.scrollObserver.changeActiveSection('portfolio-section');
        return;
      }
      if (y >= this.heroHeight + this.introHeight - this.frontendHeight * 0.5) {
        this.scrollObserver.changeActiveSection('backend-section');
        return;
      }
      if (y >= this.heroHeight) {
        this.scrollObserver.changeActiveSection('frontend-section');
        return;
      }
      if (y >= this.heroHeight * 0.3) {
        this.scrollObserver.changeActiveSection('intro-section');
        return;
      }
      if (y < this.heroHeight * 0.3) {
        this.scrollObserver.changeActiveSection('hero-section');
        return;
      }
    }
  }
}
