import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';
export let fade = trigger('fade', [
  state('void', style({ opacity: 0, transform: 'translateY(20px)' })),

  transition(':enter ,:leave', [animate(1000)]),
]);
