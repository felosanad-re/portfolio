import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { WhatIDo } from '../../Core/InterFaces/what-ido';

@Component({
  selector: 'app-what-i-do',
  standalone: true,
  imports: [],
  templateUrl: './what-i-do.component.html',
  styleUrl: './what-i-do.component.scss',
})
export class WhatIDoComponent {
  items!: WhatIDo[];

  @ViewChildren('card') cards!: QueryList<ElementRef>; // Get All element have #card

  ngOnInit() {
    this.items = [
      {
        item: 'Frontend Development',
        description:
          'I build modern, responsive user interfaces using Angular, focusing on performance, usability, and smooth user experience.',
        icon: 'fa-solid fa-code',
      },
      {
        item: 'Backend Development',
        description:
          'I develop scalable backend systems using ASP.NET Core, building clean APIs and handling data efficiently.',
        icon: 'fa-solid fa-server',
      },
      {
        item: 'API Integration.',
        description:
          'I connect frontend and backend seamlessly, ensuring fast and reliable communication between systems.',
        icon: 'fa-solid fa-plug',
      },
      {
        item: 'Responsive Design',
        description:
          'I create layouts that adapt perfectly across all devices for the best user experience.',
        icon: 'fa-solid fa-mobile-screen',
      },
      {
        item: 'Problem Solving',
        description:
          'I enjoy solving real-world problems and turning ideas into efficient, clean, and maintainable solutions.',
        icon: 'fa-solid fa-lightbulb',
      },
      {
        item: 'Performance Optimization',
        description:
          'I optimize applications for speed and efficiency to ensure fast load times and smooth interactions.',
        icon: 'fa-solid fa-gauge-high',
      },
    ];
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      },
    );

    setTimeout(() => {
      this.cards.forEach((card) => {
        observer.observe(card.nativeElement);
      });
    });
  }
}
