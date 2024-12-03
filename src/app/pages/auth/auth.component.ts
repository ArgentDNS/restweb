import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="auth-container">
      <div class="auth-box">
        <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>
        
        <form (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              [(ngModel)]="email" 
              name="email" 
              required>
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              [(ngModel)]="password" 
              name="password" 
              required>
          </div>

          <button type="submit" class="submit-btn">
            {{ isLogin ? 'Login' : 'Register' }}
          </button>
        </form>

        <p class="toggle-text">
          {{ isLogin ? 'Don\'t have an account?' : 'Already have an account?' }}
          <span (click)="toggleMode()">
            {{ isLogin ? 'Register' : 'Login' }}
          </span>
        </p>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f5f5f5;
      padding: 1rem;
    }

    .auth-box {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
    }

    h2 {
      text-align: center;
      color: #253770;
      margin-bottom: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #666;
    }

    input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }

    .submit-btn {
      width: 100%;
      padding: 1rem;
      background-color: #253770;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .submit-btn:hover {
      background-color: #1a2857;
    }

    .toggle-text {
      text-align: center;
      margin-top: 1rem;
      color: #666;
    }

    .toggle-text span {
      color: #253770;
      cursor: pointer;
      text-decoration: underline;
    }
  `]
})
export class AuthComponent {
  isLogin = true;
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit() {
    if (this.isLogin) {
      if (this.authService.login(this.email, this.password)) {
        this.router.navigate(['/home']);
      }
    } else {
      if (this.authService.register(this.email, this.password)) {
        this.router.navigate(['/home']);
      }
    }
  }
} 