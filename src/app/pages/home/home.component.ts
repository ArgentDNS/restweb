import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="hero">
      <div class="hero-content">
        <button class="order-btn" routerLink="/menu">Order Now</button>
      </div>
    </div>
    
    <section class="popular">
      <h2>Our Most Popular</h2>
      <div class="popular-grid">
        <div class="food-item food-item-1"></div>
        <div class="food-item food-item-2"></div>
        <div class="food-item food-item-3"></div>
        <div class="food-item food-item-4"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      background-image: url('../../assets/bearcap.webp');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -64px;
      position: relative;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
    }
    
    .hero-content {
      background-color: rgba(0, 0, 0, 0.6);
      padding: 2rem;
      border-radius: 8px;
      position: relative;
      z-index: 1;
    }

    .order-btn {
      background-color: #ffd700;
      border: none;
      padding: 1rem 2rem;
      font-size: 1.2rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .order-btn:hover {
      background-color: #ffed4a;
    }

    .popular {
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      text-align: center;
      margin-bottom: 2rem;
    }

    .popular-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    /* Food items with background images */
    .food-item {
      width: 100%;
      height: 250px;
      object-fit: cover; /* Optional */
      border-radius: 8px; 
      background-size: cover; 
      background-position: center; 
    }

    /* Specific images for each food item */
    .food-item-1 {
      background-image: url('../../assets/spaghett.png');
    }

    .food-item-2 {
      background-image: url('../../assets/ice.jpg');
    }

    .food-item-3 {
      background-image: url('../../assets/temp.jpeg'); /* Adjust path */
    }

    .food-item-4 {
      background-image: url('../../assets/mqdefault.jpg'); /* Adjust path */
    }
    
  `]
})
export class HomeComponent {}