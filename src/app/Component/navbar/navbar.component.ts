import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavbarItems } from '../../Core/navbar-items';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  activeIndex: number = 0; // Default active index link
  items!: NavbarItems[];
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        sectionId: 'home',
      },
      {
        label: 'About',
        sectionId: 'about',
      },
      {
        label: 'Skills',
        sectionId: 'skills',
      },
      {
        label: 'Works',
        sectionId: 'works',
      },
    ];
  }
  @ViewChild('navbarNav') navbarNav!: ElementRef<HTMLElement>;
  @ViewChild('indicator') indicator!: ElementRef<HTMLElement>;
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    const collapseEl = this.navbarCollapse.nativeElement;

    collapseEl.addEventListener('shown.bs.collapse', () => {
      this.updateIndicatorPosition(); // Update indicator position in collapse
    });

    setTimeout(() => this.updateIndicatorPosition(), 100); // Update indicator position on page
  }

  goToSection(sectionId: string, index: number, event: Event) {
    this.activeIndex = index;

    // Scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    // Move indicator
    setTimeout(() => this.updateIndicatorPosition(), 50);
  }

  private updateIndicatorPosition(): void {
    if (!this.indicator || !this.navbarNav) return;

    const container = this.navbarNav.nativeElement; // Ul
    const links = container.querySelectorAll('.nav-link'); // li
    const activeLink = links[this.activeIndex] as HTMLElement; // active a

    if (!activeLink) return;

    const linkRect = activeLink.getBoundingClientRect(); // get distance
    const containerRect = container.getBoundingClientRect();

    // Calculate indicator position
    const top = linkRect.top - containerRect.top;
    const height = linkRect.height;
    const left = linkRect.left - containerRect.left;
    const width = linkRect.width;

    const indicatorEl = this.indicator.nativeElement;

    indicatorEl.style.top = `${top}px`; // for vertical
    indicatorEl.style.height = `${height}px`;
    indicatorEl.style.left = `${left}px`; // For horizontal
    indicatorEl.style.width = `${width}px`;
  }

  @HostListener('window:resize')
  onResize() {
    this.updateIndicatorPosition();
  }
}
