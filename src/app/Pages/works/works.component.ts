import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Portfolio } from '../../Core/InterFaces/portfolio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
})
export class WorksComponent {
  @ViewChildren('card') cards!: QueryList<ElementRef>;
  projects!: Portfolio[];

  constructor(private readonly _router: Router) {}
  ngOnInit() {
    this.projects = [
      {
        id: 1,
        name: 'Ecommerce',
        description:
          'Ecommerce Platform built with performance optimization in mind using Redis for cart caching and Stripe for secure payments.',
        image: '../../../assets/Images/Ecommerce/home.png',
      },
      {
        id: 2,
        name: 'Admin Panel',
        description:
          'Multi-role Admin Panel with full control over inventory, orders, and reporting system with secure authentication.',
        image: './assets/Images/Admin Panel/Cover.png',
      },
    ];
  }

  ngAfterViewInit() {
    const observe = new IntersectionObserver(
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
        observe.observe(card.nativeElement);
      });
    });
  }

  projectDetails(id: number) {
    this._router.navigate(['/project', id]);
  }
}
