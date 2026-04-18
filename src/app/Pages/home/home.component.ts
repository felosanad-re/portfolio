import { NgStyle, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  ngAfterViewInit() {
    const section = document.getElementById('home');
    if (section) {
      section.style.height = `${window.innerHeight}px`; // set full section window height
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
