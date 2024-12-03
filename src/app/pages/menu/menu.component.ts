import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  purchases: number;
  category: string;

}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h1>Our Menu</h1>
      
      <div class="menu-categories">
        <div *ngFor="let category of getCategories()" class="category-section">
          <h2>{{ category }}</h2>
          <div class="menu-grid">
            <div *ngFor="let item of getItemsByCategory(category)" [ngClass]="getClassName(item)" class="menu-item">
              <div class="item-details">
                <h3>{{ item.name }}</h3>
                <p class="description">{{ item.description }}</p>
                <div class="price-purchases">
                  <span class="price">₹{{ item.price }}</span>
                  <span class="purchases">{{ item.purchases }}+ orders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 6rem 2rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      text-align: center;
      margin-bottom: 2rem;
      color: #333;
    }
    .category-section {
      margin-bottom: 3rem;
    }
    h2 {
      color: #666;
      border-bottom: 2px solid #ffd700;
      padding-bottom: 0.5rem;
      margin-bottom: 1.5rem;
    }
    .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    .menu-item {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      transition: transform 0.3s;
      position: relative;
      height: 300px;
      background-size: cover;
      background-position: center;
    }
    .menu-item:hover {
      transform: translateY(-5px);
    }
    .item-details {
      padding: 1rem;
      background: rgba(255, 255, 255, 0.8);
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    h3 {
      margin: 0;
      color: #333;
    }
    .description {
      color: #666;
      font-size: 0.9rem;
      margin: 0.5rem 0;
    }
    .price-purchases {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
    }
    .price {
      font-weight: bold;
      color: #e65100;
      font-size: 1.1rem;
    }
    .purchases {
      color: #888;
      font-size: 0.9rem;
    }
    /* Add specific classes for each menu item */
    .butter-chicken {
      background-image: url('../../assets/butterchicken.jpg');
    }
    .paneer-tikka {
      background-image: url('../../assets/paneertikka.jpg');
    }
    .veg-biryani {
      background-image: url('../../assets/vegbiryani.jpg');
    }
    .masala-dosa {
      background-image: url('../../assets/masaladosa.jpg');
    }
    .gulab-jamun {
      background-image: url('../../assets/gulabjamun.jpg');
    }
    .chicken-biryani {
      background-image: url('../../assets/chickenbiryani.jpg');
    }
    .dal-makhani {
      background-image: url('../../assets/dal.jpg');
    }
    .rasmalai {
      background-image: url('../../assets/rasamalai.jpg');
    }
    .manchurian {
      background-image: url('../../assets/manchuria.jpg');
    }
    .naan {
      background-image: url('../../assets/naan.jpg');
    }
  `]
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { name: 'Butter Chicken', description: 'Creamy, rich curry with tender chicken pieces', price: 320, purchases: 15482, category: 'Main Course' },
    { name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', price: 280, purchases: 12375, category: 'Starters' },
    { name: 'Veg Biryani', description: 'Fragrant rice with mixed vegetables and spices', price: 250, purchases: 18934, category: 'Main Course' },
    { name: 'Masala Dosa', description: 'Crispy crepe with spiced potato filling', price: 180, purchases: 21456, category: 'South Indian' },
    { name: 'Gulab Jamun', description: 'Sweet milk dumplings in sugar syrup', price: 120, purchases: 25789, category: 'Desserts' },
    { name: 'Chicken Biryani', description: 'Aromatic rice with tender chicken pieces', price: 350, purchases: 19567, category: 'Main Course' },
    { name: 'Dal Makhani', description: 'Creamy black lentils cooked overnight', price: 260, purchases: 14298, category: 'Main Course' },
    { name: 'Rasmalai', description: 'Soft cottage cheese dumplings in sweet milk', price: 150, purchases: 16743, category: 'Desserts' },
    { name: 'Manchurian', description: 'Indo-Chinese vegetable balls in spicy sauce', price: 220, purchases: 13567, category: 'Starters' },
    { name: 'Naan', description: 'Butter-brushed tandoor-baked flatbread', price: 60, purchases: 28945, category: 'Breads' }
  ];

  getCategories(): string[] {
    return [...new Set(this.menuItems.map(item => item.category))];
  }

  getItemsByCategory(category: string): MenuItem[] {
    return this.menuItems.filter(item => item.category === category);
  }

  getClassName(item: MenuItem): string {
    return item.name.toLowerCase().replace(/ /g, '-');
  }
}
