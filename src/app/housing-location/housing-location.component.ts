import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
  <section class="listing">
  <a [routerLink]="['/details', housingLocation.id]">
  <img class="listing-photo" [src]="baseUrl + '/' + housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}">
  <h2 class="listing-heading">{{ housingLocation.name }}</h2>
  <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  </a>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  baseUrl:string = 'https://angular.io/assets/images/tutorials/faa';
}
