import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-[#0b1120] text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <h3 class="text-xl font-robotoregular mb-2">Jérôme Gautier</h3>
            <p class="text-gray-400 font-latoregular">
              Développeur Web Full Stack
            </p>
          </div>

          <div class="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <!-- Navigation Links -->
            <div class="flex gap-6">
              <a href="#home" class="hover:text-aqua-green transition-colors"
                >Accueil</a
              >
              <a
                href="#about-section"
                class="hover:text-aqua-green transition-colors w-[72px] text-center"
                >À propos</a
              >
              <a
                href="#portfolio-section"
                class="hover:text-aqua-green transition-colors"
                >Portfolio</a
              >
              <a
                href="#pricing-section"
                class="hover:text-aqua-green transition-colors"
                >Tarifs</a
              >
              <a
                href="#contact-section"
                class="hover:text-aqua-green transition-colors"
                >Contact</a
              >
            </div>

            <!-- Social Media Links -->
            <div class="flex space-x-4">
              <a
                href="https://github.com/Jerome-Gautier"
                target="_blank"
                rel="noopener noreferrer"
                class="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-aqua-green hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <a
                href="https://www.malt.fr/profile/jeromegautier4"
                target="_blank"
                rel="noopener noreferrer"
                class="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-aqua-green hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.77 3.23c-1.02-1.01-2.1-0.36-2.78 0.32L3.59 9.95c-0.68 0.68-1.39 1.71-0.32 2.78 1.07 1.07 2.1 0.36 2.77-0.32l6.4-6.4c0.68-0.68 1.33-1.76 0.32-2.78zM6.65 3.02l1.36 1.36 1.38-1.38c0.09-0.09 0.19-0.18 0.28-0.26C9.5 2 9.1 1.36 8 1.36 6.9 1.36 6.5 2.02 6.33 2.75c0.1 0.09 0.21 0.18 0.31 0.28zm2.74 10.06l-1.38-1.38-1.36 1.35c-0.1 0.1-0.2 0.2-0.31 0.29 0.16 0.74 0.59 1.42 1.66 1.42 1.07 0 1.51-0.68 1.66-1.43-0.09-0.08-0.19-0.16-0.28-0.26zm-3.31-6.78H3.46c-0.96 0-2.19 0.3-2.19 1.74 0 1.07 0.68 1.51 1.43 1.66 0.09-0.1 3.37-3.4 3.37-3.4zm7.24 0.07c-0.08 0.09-3.37 3.4-3.37 3.4h2.58c0.96 0 2.19-0.23 2.19-1.74 0-1.1-0.66-1.52-1.39-1.66zm-6.38-0.93 0.47-0.47-1.35-1.36c-0.68-0.68-1.71-1.39-2.78-0.32-0.78 0.78-0.61 1.55-0.19 2.16 0.13-0.01 3.86-0.02 3.86-0.02zm2.15 5.19-0.47 0.47 1.38 1.38c0.68 0.68 1.76 1.33 2.77 0.32 0.76-0.76 0.58-1.55 0.17-2.19-0.13 0.01-3.85 0.02-3.85 0.02z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-gautier-a0020121b/"
                target="_blank"
                rel="noopener noreferrer"
                class="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-aqua-green hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          class="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500"
        >
          <p>© {{ currentYear }} Jérôme Gautier. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `,
  styles: `
    :host {
      display: block;
    }
    
    @media (max-width: 768px) {
      .flex-col-mobile {
        flex-direction: column;
      }
    }
  `,
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}