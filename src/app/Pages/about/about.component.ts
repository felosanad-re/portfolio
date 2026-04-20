import { Component } from '@angular/core';
import { WhatIDoComponent } from '../what-i-do/what-i-do.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [WhatIDoComponent],
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

  scrollToWorks() {
    const element = document.getElementById('works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
