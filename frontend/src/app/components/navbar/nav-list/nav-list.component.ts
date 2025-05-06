import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  imports: [],
  template: `
    <div [class.active]="navActive" class="nav-links lg:static absolute lg:min-h-fit left-0 top-[-100vh] w-full flex items-center lg:pt-0 lg:py-0 pt-25 pb-20 lg:bg-transparent bg-midnight-purple z-1000">
      <ul class="flex lg:flex-row flex-col items-center xl:gap-16 lg:gap-12 gap-10 font-robotoregular w-full lg:w-auto z-1000">
        <li>
          <button class="cursor-pointer flex justify-center items-center mx-auto" (click)="scrollTo('hero-section')">
            <svg  [class.active]="activeSection === 'hero-section'"class="fill-white hover:fill-aqua-green" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="inherit" d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"/>
            </svg>
          </button>
        </li>
        <li [class.active]="activeSection === 'about-section'" class="tracking-widest text-center hover:text-aqua-green">
          <button (click)="scrollTo('about-section')" class="capitalize cursor-pointer">à propos</button>
        </li>
        <li [class.active]="activeSection === 'portfolio-section'" class="tracking-widest text-center hover:text-aqua-green">
          <button (click)="scrollTo('portfolio-section')" class="capitalize cursor-pointer">projects</button>
        </li>
        <li [class.active]="activeSection === 'pricing-section'" class="tracking-widest text-center hover:text-aqua-green">
          <button (click)="scrollTo('pricing-section')" class="capitalize cursor-pointer">tarifs</button>
        </li>
        <li  [class.active]="activeSection === 'contact-section'" class="tracking-widest text-center hover:text-aqua-green">
          <button (click)="scrollTo('contact-section')" class="capitalize cursor-pointer">contact</button>
        </li>
      </ul>
    </div>
    <button [class.active]="isFixed" class="menu-icon z-1001" (click)="toggleNav()">
      <svg class="cursor-pointer lg:hidden" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from All by undefined - undefined --><path fill="currentColor" d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"/></svg>
    </button>
  `,
  styles: `
  .nav-links {
    transition: none;
  }

  .nav-links.active {
    top: 0;
  }

  li {
    transition: color 0.3s ease-in-out;
  }

  li.active button {
    text-decoration: underline 2px solid var(--aqua-green);
    text-underline-offset: 6px;
  }

  svg.active {
    fill: var(--aqua-green);
  }

  @media (max-width: 1023px) {
    .menu-icon {
      margin-right: 4px;
      border-radius: 50%;
      padding: 4px;
      background: rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      display: flex;
      justify-content: center;
      align-items: center;
    }

      .menu-icon.active {
      top: 4px;
      background: rgba(0, 0, 0, 0.6);
      color: var(--aqua-green);
    }

    .menu-icon:hover {
      background: rgba(0, 0, 0, 0.4);
    }
    
    .nav-links {
      background: rgba(14, 19, 36, 0.95);
      padding-top: 80px;
      height: 100vh;
      justify-content: center;
      transition: all 0.5s linear;
    }

    li {
      width: 240px;
      margin: 8px 0;
      padding: 12px 0;
      background: rgba(255, 255, 255, 0.05);
      border: none;
      border-radius: 12px;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }

    li:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--aqua-green), transparent);
      transition: width 0.4s ease;
    }

    li:hover:before,
    li.active:before {
      width: 100%;
    }

    li:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    li.active {
      background: rgba(9, 180, 185, 0.1);
      border: none;
    }

    li.active button {
      text-decoration: none;
      color: var(--aqua-green);
    }

    li button {
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 1.5px;
      width: 100%;
      padding: 6px 0;
    }

    /* Home icon specific styles */
    li:first-child {
      background: transparent;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }

    li:first-child:hover {
      transform: translateY(-3px);
      box-shadow: none;
    }

    li:first-child button {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }
`,
})
export class NavListComponent {
  @Input() activeSection: string | null = null;
  @Input() isFixed!: boolean;

  navActive = false;

  toggleNav() {
    this.navActive = !this.navActive;
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.navActive = false;
    }
  }
}