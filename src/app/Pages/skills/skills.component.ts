import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Skills } from '../../Core/InterFaces/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('skillsSection') skillsSection!: ElementRef<HTMLElement>;

  frontEndSkills!: Skills[];
  backEndSkills!: Skills[];
  toolsSkills!: Skills[];
  sectionVisible = false;
  contentVisible = false;

  private sectionObserver?: IntersectionObserver;
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit() {
    this.frontEndSkills = [
      { name: 'HTML', percentage: 95 },
      { name: 'CSS', percentage: 90 },
      { name: 'SCSS', percentage: 85 },
      { name: 'Responsive Design', percentage: 95 },
      { name: 'Bootstrap', percentage: 90 },
      { name: 'JavaScript', percentage: 85 },
      { name: 'TypeScript', percentage: 85 },
      { name: 'Angular', percentage: 80 },
      { name: 'RxJS', percentage: 80 },
    ];

    this.backEndSkills = [
      { name: 'C#', percentage: 85 },
      { name: 'Redis', percentage: 85 },
      { name: 'LINQ', percentage: 85 },
      { name: 'SQL Server', percentage: 85 },
      { name: 'ASP.NET Core', percentage: 80 },
      { name: 'Entity Framework', percentage: 80 },
    ];

    this.toolsSkills = [
      { name: 'Postman', percentage: 85 },
      { name: 'REST APIs', percentage: 85 },
      { name: 'Git', percentage: 80 },
      { name: 'Azure DevOps', percentage: 60 },
      { name: 'Visual Studio / VS Code', percentage: 95 },
      { name: 'SQL Server Management Studio', percentage: 95 },
    ];
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.sectionVisible = true;
      this.contentVisible = true;
      return;
    }

    // check if IntersectionObserver is not supported
    if (typeof IntersectionObserver === 'undefined') {
      this.sectionVisible = true; // show the section
      this.contentVisible = true; // show the content
      return;
    }

    this.sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        this.sectionVisible = true;

        window.setTimeout(() => {
          this.contentVisible = true;
        }, 220);

        this.sectionObserver?.disconnect();
      },
      {
        threshold: 0.25,
      },
    );

    this.sectionObserver.observe(this.skillsSection.nativeElement);
  }

  ngOnDestroy() {
    this.sectionObserver?.disconnect();
  }
}
