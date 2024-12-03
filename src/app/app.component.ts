import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  template: `
    <ng-container *ngIf="authService.isLoggedIn() | async">
      <app-navbar></app-navbar>
    </ng-container>
    <router-outlet></router-outlet>
    <ng-container *ngIf="authService.isLoggedIn() | async">
      <footer class="footer">
        <div class="footer-content">
          <span>Hope you have a wonderful experience</span>
          <button class="socials-btn">Socials</button>
        </div>
      </footer>
    </ng-container>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      position: relative;
    }
    .footer {
      background-color: #253770;
      color: white;
      padding: 1rem;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .socials-btn {
      background-color: #ffd700;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class AppComponent {
  constructor(public authService: AuthService) {}
}
