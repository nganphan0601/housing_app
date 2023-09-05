import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, HomeComponent],
  template: `
  <main>
    <header class="brand-name">
    <a id="logo" [routerLink]="['/']">
      <img class="brand-logo" src="/assets/homelogo.svg" height="50px" width="auto" alt="logo" aria-hidden="true">
      <h1 class="brand-title">Homes</h1>
    </a>
      <div class="navigation">
        <a [routerLink]="['/about']">About</a>
        <a [routerLink]="['/contact']">Contact</a>
        <a [routerLink]="['/login']" id="login">
        Login
        </a>
      </div>
    </header>
  
    <section class="content">
    <router-outlet></router-outlet>
    </section>
  </main>
`,
  
})
export class AppComponent {
  title = 'homes';
  
}
