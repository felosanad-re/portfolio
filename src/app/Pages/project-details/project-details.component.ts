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
    {
      id: 3,
      name: 'Online Learning Platform',
      description:
        'A full-stack online learning platform with course management, online and recorded learning, payments, progress tracking, and role-based dashboards for students, instructors, and administrators.',

      cover: './assets/Images/OnlinePlatform/Hero.png',

      images: [
        './assets/Images/OnlinePlatform/one.png',
        './assets/Images/OnlinePlatform/Second.png',
        './assets/Images/OnlinePlatform/Third.png',
        './assets/Images/OnlinePlatform/four.png',
        './assets/Images/OnlinePlatform/five.png',
        './assets/Images/OnlinePlatform/six.png',
      ],

      technologies: [
        'Angular 17',
        '.NET 9',
        'SQL Server',
        'Redis',
        'Stripe',
        'Zoom API',
      ],

      features: [
        'Role-based authentication and authorization',
        'Course creation and management',
        'Online and recorded courses',
        'Student enrollment and lecture progress tracking',
        'Course ratings and reviews',
        'Stripe payment integration',
        'Live classes with Zoom integration',
        'Redis-based caching and session management',
        'Admin and instructor analytics dashboards',
        'User, course, and enrollment management',
      ],

      keyAchievements: [
        'Designed the backend using Clean Architecture with clear separation of concerns',
        'Implemented Generic Repository, Unit of Work, and Specification patterns for reusable data access',
        'Built a modular Angular frontend using reusable components, services, and PrimeNG',
        'Implemented ASP.NET Core Identity with role-based authentication and authorization',
        'Integrated Stripe for secure course payments and webhook-based payment confirmation',
        'Integrated Zoom API and webhooks to support live online classes',
        'Implemented Redis for efficient caching and temporary data management',
        'Built student progress tracking and course rating systems',
        'Developed dashboards with enrollment, revenue, student, instructor, and course analytics',
      ],

      architecture: [
        'Clean Architecture',
        'Onion Architecture',
        'Generic Repository Pattern',
        'Unit of Work Pattern',
        'Specification Pattern',
        'ASP.NET Core Identity',
        'Entity Framework Core',
        'Redis Caching',
      ],

      demoUrl: 'https://courses-gamma-two.vercel.app/',
      githubUrl: 'https://github.com/felosanad-re/Courses',
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
