import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollObserverService {
  activeSection = '';
  isFixed = false;
  heroShown: boolean = false;
  introShown: boolean = false;
  frontendShown: boolean = false;
  backendShown: boolean = false;
  portfolioShown: boolean = false;
  pricingShown: boolean = false;
  contactShown: boolean = false;

  private _isInitialized = new BehaviorSubject<boolean>(false);
  isInitialized = this ._isInitialized.asObservable();

  initialize() {
    this._isInitialized.next(true);
  }

  changeActiveSection(section: string) {
    switch (section) {
      case 'hero-section':
        this.heroShown = true;
        this.activeSection = 'hero-section';
        break;
      case 'intro-section':
        this.heroShown = true;
        this.introShown = true;
        this.activeSection = 'about-section';
        break;
      case 'frontend-section':
        this.heroShown = true;
        this.introShown = true;
        this.frontendShown = true;
        this.activeSection ='about-section';
        break;
      case 'backend-section':
        this.heroShown = true;
        this.introShown = true;
        this.frontendShown = true;
        this.backendShown = true;
        this.activeSection = 'about-section';
        break;
      case 'portfolio-section':
        this.heroShown = true;
        this.introShown = true;
        this.frontendShown = true;
        this.backendShown = true;
        this.portfolioShown = true;
        this.activeSection = 'portfolio-section';
        break;
      case 'pricing-section':
        this.heroShown = true;
        this.introShown = true;
        this.frontendShown = true;
        this.backendShown = true;
        this.portfolioShown = true;
        this.pricingShown = true;
        this.activeSection = 'pricing-section';
        break;
      case 'contact-section':
        this.heroShown = true;
        this.introShown = true;
        this.frontendShown = true;
        this.backendShown = true;
        this.portfolioShown = true;
        this.pricingShown = true;
        this.contactShown = true;
        this.activeSection = 'contact-section';
        break;
      default:
        break;
    }
  }

  changeIsFixed(isFixed: boolean) {
    this.isFixed = isFixed;
  }
}