import { Component, Input } from '@angular/core';
import { RatesData } from '../../../../../../public/pricing';
import { NgFor } from '@angular/common';
import { ArrowdownrightIconComponent } from '../../../icons/arrowdownright-icon/arrowdownright-icon.component';

@Component({
  selector: 'app-rates-card',
  imports: [NgFor, ArrowdownrightIconComponent],
  template: `
    <div class="rate-container">
      <div
        class="title-container"
        [class.one]="data.id === 1"
        [class.two]="data.id === 2"
        [class.three]="data.id === 3"
      >
        <h3
          class="text-3xl uppercase font-robotoregular text-center text-white tracking-widest"
        >
          <div>{{ data.title1 }}</div>
          <div>{{ data.title2 }}</div>
        </h3>
      </div>
      <div class="mt-[-60px] pt-8 w-full bg-white">
        <p
          class="text-center text-gray-400 text-xl font-semibold capitalize tracking-wide"
        >
          {{ data.from }}
        </p>
        <h4 class="text-center text-4xl font-semibold text-gray-800 mt-2">
          {{ data.price }}€
        </h4>
        <div class="half-circle-bot"></div>
      </div>
      <div
        class="h-[58px] w-full flex justify-center align-center bg-white border-gray-300 text-xl text-center leading-tight"
      >
        {{ data.subtitle }}
      </div>
      <ul class="text-gray-600 w-full">
        @for (array of data.features; track $index) {
        <li
          class="relative flex flex-row justify-center items-center text-center h-[70px] px-2 py-2 gap-8"
        >
          <div class="absolute left-4">
            <app-arrowdownright-icon />
          </div>
          <div>
            <p *ngFor="let item of array" class="text-gray-600">
              {{ item }}
            </p>
          </div>
        </li>
        }
      </ul>
    </div>
  `,
  styles: `
  .rate-container {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 375px;
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.45);
    border-radius: 12px;
    background-color: #fff;
    transition: all 0.4s ease-in-out;
    z-index: 1;
    overflow: visible;
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  .rate-container:before,
  .rate-container:after {
    content: '';
    position: absolute;
    height: 0;
    width: calc(100% + 5px);
    background-image: conic-gradient(from var(--angle), var(--aqua-green), var(--royal-blue), var(--slate-grey), var(--aqua-green));
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
    border-radius: 12px;
    transition: height 0.4s ease-in;
    animation: 3s spin linear infinite;
    opacity: 0;
  }

  .rate-container:hover:before {
    height: calc(100% + 5px);
    filter: blur(1.5rem);
    opacity: 0.5;
  }

  .rate-container:hover:after {
    height: calc(100% + 5px);
    opacity: 1;
  }

  @keyframes spin {
    from{
        --angle: 0deg;
    }
    to{
        --angle: 360deg;
    }
  }

  .title-container {
    height: 236px;
    width: 100%;
    padding-top: 30px;
    box-sizing: border-box;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    clip-path: polygon(100% 0, 100% 100%, 50% 75%, 0 100%, 0 0);
  }

  .title-container.one {
    background: linear-gradient(45deg, black 15%, var(--midnight-purple) 50%, black 90%);
  }

  .title-container.two {
    background: linear-gradient(90deg, black 15%, var(--midnight-purple) 50%, black 90%);
  }

  .title-container.three {
    background: linear-gradient(135deg, black 15%, var(--midnight-purple) 50%, black 90%);
  }
  
  .half-circle-bot {
    height: 8px;
    width: 80px;
    margin: 12px auto;
    background-color: var(--aqua-green);
    border-bottom-left-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%;
  }
  
  li:nth-child(n) {
    background-color: white;
  }

  li:nth-child(2n) {
    background-color: rgb(242, 242, 242);
  }
  
  li:last-child {
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }`,
})
export class RatesCardComponent {
  @Input() data!: RatesData;
}