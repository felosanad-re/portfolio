import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  getSectionHeight() {
    const section = document.getElementById('about');
    if (section) {
      section.style.height = `${window.innerHeight}px`;
    }
  }
}
