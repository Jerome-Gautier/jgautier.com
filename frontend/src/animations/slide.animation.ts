import {
  animation,
  style,
  animate,
  query,
  stagger,
  useAnimation,
} from '@angular/animations';

export const slideAnimation = animation([
  style({ opacity: 0, transform: 'translate{{ axis }}({{ enterStart }})' }),
  animate(
    '{{ time }} ease-in',
    style({ opacity: 1, transform: 'translate{{ axis }}(0)' })
  ),
]);

export const staggerSlideAnimation = animation([
  query(
    ':scope > *',
    [
      style({ opacity: 0, transform: 'translate{{ axis }}({{ enterStart }})' }),
      stagger(100, [useAnimation(slideAnimation)]),
    ],
    { optional: true }
  ),
]);

export const staggerFadeInAnimation = animation([
  query(
    ':scope > *',
    [
      style({ opacity: 0, scale: 0 }),
      stagger(50, [
        animate('{{ time }} ease-in', style({ opacity: 1, scale: 1 })),
      ]),
    ],
    { optional: true }
  ),
]);