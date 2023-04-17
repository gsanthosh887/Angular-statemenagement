import { Component } from '@angular/core';
import { HeroStore } from './Store/hero.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroStore]
})
export class AppComponent {
  title = 'Angular-Project';
}
