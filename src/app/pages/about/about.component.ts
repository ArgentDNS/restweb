import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>About Us</h1>
      <p>About content coming soon...</p>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 6rem 2rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class AboutComponent {} 