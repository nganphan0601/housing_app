import { Component } from '@angular/core';
// import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/homelogo.svg" height="50px" width="auto" alt="logo" aria-hidden="true">
      <h1 class="brand-title">Homes</h1>
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  
})
export class AppComponent {
  title = 'homes';
  
}
