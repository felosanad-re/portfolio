import { Component, HostListener } from '@angular/core';
import { ProjectModel } from '../../Core/InterFaces/project-model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {
  project?: ProjectModel;
  selectedImage: string | null = null;
  projects: ProjectModel[] = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description:
        'Full-featured e-commerce platform with product browsing, shopping cart, and secure online payments using Stripe.',
      cover: './assets/Images/Ecommerce/home.png',
      images: [
        './assets/Images/Ecommerce/Product.png',
        './assets/Images/Ecommerce/Carts.png',
        './assets/Images/Ecommerce/order.png',
        './assets/Images/Ecommerce/stripe.png',
      ],
      technologies: ['Angular', '.NET', 'SQL Server', 'Redis', 'Stripe'],
      features: [
        'User authentication & authorization',
        'Product browsing & filtering',
        'Shopping cart using Redis',
        'Secure payments with Stripe',
        'Order history for users',
      ],
      keyAchievements: [
        'Implemented Redis caching to optimize cart performance and reduce database load',
        'Integrated secure Stripe payment gateway with proper error handling',
        'Applied Clean Architecture with Repository, Unit of Work, and Specification patterns',
        'Used JWT authentication for secure user sessions',
      ],
      architecture: [
        'Clean Architecture',
        'Repository Pattern',
        'Unit of Work',
        'Specification Pattern',
        'Builder Pattern',
      ],
      demoUrl: 'http://shoppingfast.runasp.net/home',
      githubUrl: 'https://github.com/felosanad-re/Ecommerce-FullStack',
    },
    {
      id: 2,
      name: 'Admin Dashboard',
      description:
        'Multi-role Admin Panel with full control over inventory, orders, and reporting system with secure authentication.',
      cover: './assets/Images/Admin Panel/Cover.png',
      images: [
        './assets/Images/Admin Panel/First.png',
        './assets/Images/Admin Panel/Second.png',
        './assets/Images/Admin Panel/theard.png',
      ],
      technologies: ['Angular', '.NET', 'SQL Server'],
      features: [
        'Role-based authentication',
        'Inventory management',
        'Orders tracking',
        'Reports dashboard',
      ],
      keyAchievements: [
        'Designed scalable backend using Clean Architecture principles',
        'Implemented Specification pattern for flexible and reusable queries',
        'Built modular Angular frontend with reusable components and services',
        'Handled role-based authorization for multiple admin levels',
      ],
      architecture: [
        'Clean Architecture',
        'Repository Pattern',
        'Unit of Work',
        'Specification Pattern',
      ],
      demoUrl: 'http://composystem.runasp.net/',
      githubUrl: 'https://github.com/felosanad-re/Soulution.AdminPanel.Apis',
    },
  ];

  constructor(private readonly _activatedRouter: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this._activatedRouter.snapshot.paramMap.get('id'));
    this.project = this.projects.find((project) => project.id === id);
    if (!this.project) {
      throw new Error('Project not found');
    }
  }

  openImage(image: string): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.selectedImage) {
      this.closeImage();
    }
  }
}
