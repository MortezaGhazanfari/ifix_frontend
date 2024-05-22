import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  storeName: string = "iFix";
  establishmentYear: number = 2010; // Setze das Gründungsjahr deines Ladens

}
