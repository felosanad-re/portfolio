import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavbarItems } from '../../Core/InterFaces/navbar-items';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  activeIndex: number = 0;
  isScrolled: boolean = false;
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
      this.updateIndicatorPosition();
    });

    this.updateIndicatorPosition();
  }

  goToSection(sectionId: string, index: number, event: Event) {
    this.activeIndex = index;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    this.updateIndicatorPosition();
  }

  private updateIndicatorPosition(): void {
    if (!this.indicator || !this.navbarNav) return;

    const container = this.navbarNav.nativeElement;
    const links = container.querySelectorAll('.nav-link');
    const activeLink = links[this.activeIndex] as HTMLElement;

    if (!activeLink) return;

    const linkRect = activeLink.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const top = linkRect.top - containerRect.top;
    const height = linkRect.height;
    const left = linkRect.left - containerRect.left;
    const width = linkRect.width;

    const indicatorEl = this.indicator.nativeElement;

    indicatorEl.style.top = `${top}px`;
    indicatorEl.style.height = `${height}px`;
    indicatorEl.style.left = `${left}px`;
    indicatorEl.style.width = `${width}px`;
  }

  private currentSection = '';

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 80;

    // Update active section based on scroll position
    this.updateActiveSection();
  }

  // Variable to store the timeout for debounce
  private scrollTimeout: any;

  private updateActiveSection() {
    // Clear any existing timeout to debounce the function
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    // Use debounce to prevent rapid updates during smooth scrolling
    this.scrollTimeout = setTimeout(() => {
      const sections = ['home', 'about', 'skills', 'works'];
      const sectionHeights: Record<string, { top: number; bottom: number }> =
        {};

      // Get position of each section
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Only apply offset once in the comparison, not in the position calculation
          sectionHeights[section] = {
            top: rect.top + window.scrollY,
            bottom: rect.top + window.scrollY + rect.height,
          };
        }
      });

      // Determine which section is currently active based on scroll position
      const currentScroll = window.scrollY;
      let newSection = 'home'; // default to home

      // Check each section to see if current scroll is within its bounds
      for (const [section, positions] of Object.entries(sectionHeights)) {
        // Only apply the offset once here, and add a small buffer to prevent rapid toggling
        if (
          currentScroll >= positions.top - 80 &&
          currentScroll < positions.bottom - 120
        ) {
          newSection = section;
          break;
        }
      }

      // Only update if section has changed
      if (newSection !== this.currentSection) {
        this.currentSection = newSection;

        // Update activeIndex based on section
        const sectionIndex = sections.indexOf(newSection);
        if (sectionIndex !== -1) {
          this.activeIndex = sectionIndex;
        }

        // Trigger indicator update
        this.updateIndicatorPosition();
      }
    }, 50); // 50ms debounce delay
  }

  @HostListener('window:resize')
  onResize() {
    this.updateIndicatorPosition();
  }
}
