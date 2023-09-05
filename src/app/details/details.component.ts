import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <article>
    <div class="container">
    <img class="listing-photo" src="{{baseUrl + '/' + housingLocation?.photo}}"
      alt="Exterior photo of {{housingLocation?.name}}"/>
      <div class="overlay">
      <div class="text"><h2 class="section-heading" (click)="displayForm()" >Apply now to live here</h2></div>
      </div>
    </div>

    <div class="listing-details" [style.display]="detailsDisplay">
    <section class="listing-description" >
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features" >
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
    </div>

    
    <section class="listing-apply" [style.display]="formDisplay">
      
      <form class="userInfo" [formGroup]="applyForm" (submit)="submitApplication()">
      <h2 class="section-heading">Apply now</h2>  
      <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
        <button type="submit" class="primary" (click)="backToDetails()">Cancel</button>

        </form>
    </section>
    
  </article>
`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  baseUrl:string = 'https://angular.io/assets/images/tutorials/faa';

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  detailsDisplay = 'block';
  formDisplay = 'none';

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
    }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

  // function to display the form

  displayForm() {
    this.detailsDisplay = 'none';
    this.formDisplay = 'block';
  }
  // function to return to the details
  backToDetails() {
    this.detailsDisplay = 'block';
    this.formDisplay = 'none';
  }
}
