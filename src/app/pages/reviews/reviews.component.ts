import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Review {
  userName: string;
  rating: number;
  date: string;
  comment: string;
  dishOrdered: string;
  userImage: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h1>Customer Reviews</h1>
      
      <div class="reviews-stats">
        <div class="overall-rating">
          <h2>{{ getAverageRating() }} / 5</h2>
          <div class="stars">
            <span *ngFor="let star of [1,2,3,4,5]">
              ⭐
            </span>
          </div>
          <p>Based on {{ reviews.length }} reviews</p>
        </div>
      </div>

      <div class="reviews-grid">
        <div *ngFor="let review of reviews" class="review-card">
          <div class="review-header">
            <img [src]="review.userImage" [alt]="review.userName" class="user-image">
            <div class="user-info">
              <h3>{{ review.userName }}</h3>
              <div class="rating">
                <span *ngFor="let star of [1,2,3,4,5]" 
                      [class.filled]="star <= review.rating">★</span>
              </div>
              <span class="date">{{ review.date }}</span>
            </div>
          </div>
          <div class="review-content">
            <p class="dish-ordered">Ordered: {{ review.dishOrdered }}</p>
            <p class="comment">{{ review.comment }}</p>
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
    .reviews-stats {
      text-align: center;
      margin-bottom: 3rem;
    }
    .overall-rating {
      display: inline-block;
      padding: 2rem;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .overall-rating h2 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 0.5rem;
    }
    .stars {
      color: #ffd700;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    .review-card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .review-header {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
    .user-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 1rem;
      object-fit: cover;
    }
    .user-info h3 {
      margin: 0;
      color: #333;
    }
    .rating {
      color: #ffd700;
      margin: 0.2rem 0;
    }
    .rating span {
      color: #ddd;
    }
    .rating span.filled {
      color: #ffd700;
    }
    .date {
      color: #888;
      font-size: 0.9rem;
    }
    .review-content {
      color: #666;
    }
    .dish-ordered {
      font-weight: bold;
      color: #e65100;
      margin-bottom: 0.5rem;
    }
    .comment {
      line-height: 1.6;
    }
  `]
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      userName: "Priya Sharma",
      rating: 5,
      date: "March 15, 2024",
      comment: "The Butter Chicken was absolutely divine! The gravy was rich and creamy, and the chicken was perfectly cooked. Will definitely order again!",
      dishOrdered: "Butter Chicken with Naan",
      userImage: "./assets/images/user1.jpg"
    },
    {
      userName: "Rahul Verma",
      rating: 4,
      date: "March 14, 2024",
      comment: "Loved the Paneer Tikka. The spices were perfectly balanced. The only reason for 4 stars is that the delivery was slightly delayed.",
      dishOrdered: "Paneer Tikka",
      userImage: "./assets/images/user2.jpg"
    },
    {
      userName: "Anjali Patel",
      rating: 5,
      date: "March 13, 2024",
      comment: "Best Biryani in town! The aroma and taste are exactly what you'd expect from an authentic biryani. The portion size is generous too.",
      dishOrdered: "Veg Biryani",
      userImage: "./assets/images/user3.jpg"
    },
    {
      userName: "Mohammed Khan",
      rating: 5,
      date: "March 12, 2024",
      comment: "The Dal Makhani was creamy and flavorful. You can taste that it's been slow-cooked to perfection. The Naan was soft and buttery.",
      dishOrdered: "Dal Makhani with Butter Naan",
      userImage: "./assets/images/user4.jpg"
    },
    {
      userName: "Sneha Reddy",
      rating: 4,
      date: "March 11, 2024",
      comment: "Masala Dosa was crispy and the potato filling was well-seasoned. The sambhar and chutneys were fresh and authentic.",
      dishOrdered: "Masala Dosa",
      userImage: "./assets/images/user5.jpg"
    },
    {
      userName: "Arjun Singh",
      rating: 5,
      date: "March 10, 2024",
      comment: "The Gulab Jamun was perfectly sweet and soft. Definitely the best dessert to end your meal with!",
      dishOrdered: "Gulab Jamun",
      userImage: "./assets/images/user6.jpg"
    }
  ];

  getAverageRating(): number {
    const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    return Number((total / this.reviews.length).toFixed(1));
  }
} 