import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <div class="nav-links">
        <a routerLink="/home">Home</a>
        <a routerLink="/menu">Menu</a>
        <a routerLink="/reviews">Reviews</a>
        <a routerLink="/about">About</a>
        <a href="#" (click)="logout($event)">Logout</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: #253770;
      padding: 1rem;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
    a {
      color: white;
      text-decoration: none;
      font-size: 1.1rem;
    }
    a:hover {
      color: #ffd700;
    }
  `]
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(event: Event) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
} 