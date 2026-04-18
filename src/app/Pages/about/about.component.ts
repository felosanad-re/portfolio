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

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/Files/Felopatter_Sanad_CV.pdf';
    link.download = 'Felopatter_Sanad_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
