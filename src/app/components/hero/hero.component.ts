import { Component, OnInit } from '@angular/core';
import { fade } from 'src/animations';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [fade],
})
export class HeroComponent implements OnInit {
  maroon = '#C64917';
  constructor() {}

  ngOnInit(): void {}
  show() {
    console.log('fuck');
  }
}
