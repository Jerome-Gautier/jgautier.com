import { Component, Renderer2 } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
  AnimationEvent,
} from '@angular/animations';

import { ContactService } from '../../../services/contact.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf],
  standalone: true,
  animations: [
    trigger('wobble', [
      transition('false => true', [
        animate(
          '0.75s',
          keyframes([
            style({ transform: 'translateX(-10px)', offset: 0.1 }),
            style({ transform: 'translateX(10px)', offset: 0.3 }),
            style({ transform: 'translateX(-10px)', offset: 0.5 }),
            style({ transform: 'translateX(10px)', offset: 0.7 }),
            style({ transform: 'translateX(-10px)', offset: 0.9 }),
            style({ transform: 'translateX(0)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
  template: `
    <section
      id="contact-section"
      class="min-h-screen flex flex-col justify-center items-center bg-primary-bg from-[#0b1120] to-[#141a2d] text-white px-4 mb-8"
    >
      <div class="max-w-screen-md w-full text-center mb-12">
        <h2 class="text-3xl font-semibold mt-20 mb-4">Contact</h2>
        <p class="text-lg font-light">
          N'hésitez pas à me contacter pour toute question ou demande de
          projet.<br />
          Je vous recontacterai dans les plus brefs délais.
        </p>
      </div>
      <div class="succes-msg">
        <p
          *ngIf="isSubmitted"
          class="text-green-500 text-sm mb-4"
        >
          Votre message a été envoyé avec succès !
        </p>
      </div>
      <form (ngSubmit)="onSubmit()" class="max-w-screen-sm w-full space-y-6">
        <div
          [@wobble]="nameWobble"
          (@wobble.done)="nameWobble = false"
          (@wobble.start)="onWobbleStart($event)"
          [ngClass]="{ invalid: nameInvalid }"
        >
          <label for="name" class="block text-sm font-medium mb-2">Nom</label>
          <input
            id="name"
            name="name"
            type="text"
            [(ngModel)]="formData.name"
            (input)="clearInvalidState('name')"
            class="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-green focus:border-aqua-green"
            placeholder="Votre nom"
          />
        </div>

        <div
          [@wobble]="emailWobble"
          (@wobble.done)="emailWobble = false"
          (@wobble.start)="onWobbleStart($event)"
          [ngClass]="{ invalid: emailInvalid }"
        >
          <label for="email" class="block text-sm font-medium mb-2"
            >Adresse Email</label
          >
          <input
            id="email"
            name="email"
            type="email"
            [(ngModel)]="formData.email"
            (input)="clearInvalidState('email')"
            class="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-green focus:border-aqua-green"
            placeholder="Votre adresse email"
          />
        </div>

        <div
          [@wobble]="subjectWobble"
          (@wobble.done)="subjectWobble = false"
          (@wobble.start)="onWobbleStart($event)"
          [ngClass]="{ invalid: subjectInvalid }"
        >
          <label for="subject" class="block text-sm font-medium mb-2"
            >Sujet</label
          >
          <input
            id="subject"
            name="subject"
            [(ngModel)]="formData.subject"
            (input)="clearInvalidState('subject')"
            type="text"
            class="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-green focus:border-aqua-green"
            placeholder="Sujet"
          />
        </div>

        <div
          [@wobble]="messageWobble"
          (@wobble.done)="messageWobble = false"
          (@wobble.start)="onWobbleStart($event)"
          [ngClass]="{ invalid: messageInvalid }"
        >
          <label for="message" class="block text-sm font-medium mb-2"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            [(ngModel)]="formData.message"
            (input)="clearInvalidState('message')"
            rows="4"
            class="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-green focus:border-aqua-green"
            placeholder="Votre message"
          ></textarea>
        </div>
        <div *ngIf="errorMessage" class="text-red-500 text-sm mb-4">
          {{ errorMessage }}
        </div>
        <button
          type="submit"
          [disabled]="isLoading"
          class="w-full py-2 bg-aqua-green text-black font-medium rounded-md hover:bg-opacity-90 transition duration-300 relative"
          [ngClass]="{
            'opacity-75 cursor-not-allowed': isLoading,
            'cursor-pointer': !isLoading
          }"
        >
          <span *ngIf="!isLoading">Envoyer</span>
          <span *ngIf="isLoading" class="flex items-center justify-center">
            <svg
              class="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Envoi en cours...
          </span>
        </button>
      </form>
    </section>
  `,
  styles: [
    `
      .invalid label {
        color: red;
      }

      .invalid input,
      .invalid textarea {
        box-shadow: inset 0px 0px 2px 2px red;
      }
    `,
  ],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  nameWobble = false;
  emailWobble = false;
  subjectWobble = false;
  messageWobble = false;

  isLoading = false;
  isSubmitted = false;
  errorMessage = '';

  nameInvalid = false;
  emailInvalid = false;
  subjectInvalid = false;
  messageInvalid = false;

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  // Method to clear invalid state
  clearInvalidState(field: string): void {
    switch (field) {
      case 'name':
        this.nameInvalid = false;
        this.nameWobble = false;
        break;
      case 'email':
        this.emailInvalid = false;
        this.emailWobble = false;
        break;
      case 'subject':
        this.subjectInvalid = false;
        this.subjectWobble = false;
        break;
      case 'message':
        this.messageInvalid = false;
        this.messageWobble = false;
        break;
    }
  }

  validateForm(): boolean {
    let isValid = true;

    if (!this.formData.name) {
      this.nameInvalid = true;
      this.nameWobble = true;
      isValid = false;
    }

    if (!this.formData.email || !this.isValidEmail(this.formData.email)) {
      this.emailInvalid = true;
      this.emailWobble = true;
      isValid = false;
    }

    if (!this.formData.subject) {
      this.subjectInvalid = true;
      this.subjectWobble = true;
      isValid = false;
    }

    if (!this.formData.message) {
      this.messageInvalid = true;
      this.messageWobble = true;
      isValid = false;
    }

    return isValid;
  }

  constructor(
    private renderer: Renderer2,
    private contactService: ContactService
  ) {}

  checkErr = (
    name: string,
    email: string,
    subject: string,
    message: string
  ) => {
    let error = false;
    if (!name) {
      this.nameWobble = true;
      error = true;
    } else {
      this.nameWobble = false;
    }
    if (!email) {
      this.emailWobble = true;
      error = true;
    } else {
      this.emailWobble = false;
    }
    if (!subject) {
      this.subjectWobble = true;
      error = true;
    } else {
      this.subjectWobble = false;
    }
    if (!message) {
      this.messageWobble = true;
      error = true;
    } else {
      this.messageWobble = false;
    }

    return error;
  };

  onSubmit() {
    this.errorMessage = '';
    this.isSubmitted = false;
    if (!this.validateForm()) {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires.';
      return;
    } else {
      this.isLoading = true;
      this.errorMessage = '';

      this.contactService.sendContactForm(this.formData).subscribe({
        next: (response) => {
          this.isSubmitted = true;
          this.isLoading = false;
          this.formData = {
            name: '',
            email: '',
            subject: '',
            message: '',
          };
          // Hide success message after 5 seconds
          setTimeout(() => {
            this.isSubmitted = false;
          }, 5000);
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          this.errorMessage =
            "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.";
          this.isLoading = false;
        },
      });
    }
  }

  protected onWobbleStart(event: AnimationEvent) {
    if (event.fromState !== 'void') {
      this.renderer.addClass(event.element, 'invalid');
    }
  }
}
