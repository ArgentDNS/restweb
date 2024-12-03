import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<any>(null);

  constructor() {
    // Check if user exists in localStorage
    const user = localStorage.getItem('user');
    if (user) {
      this.isAuthenticated.next(true);
      this.currentUser.next(JSON.parse(user));
    } else {
      this.isAuthenticated.next(false);
      this.currentUser.next(null);
    }
  }

  login(email: string, password: string): boolean {
    // In a real app, this would be an API call
    // For demo, we'll just simulate authentication
    const user = { email, name: email.split('@')[0] };
    localStorage.setItem('user', JSON.stringify(user));
    this.isAuthenticated.next(true);
    this.currentUser.next(user);
    return true;
  }

  register(email: string, password: string): boolean {
    // In a real app, this would be an API call
    const user = { email, name: email.split('@')[0] };
    localStorage.setItem('user', JSON.stringify(user));
    this.isAuthenticated.next(true);
    this.currentUser.next(user);
    return true;
  }

  logout() {
    localStorage.removeItem('user');
    this.isAuthenticated.next(false);
    this.currentUser.next(null);
  }

  isLoggedIn() {
    return this.isAuthenticated.asObservable();
  }
} 