import { Component } from '@angular/core';
import { Skills } from '../../Core/skills';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  frontEndSkills!: Skills[];
  backEndSkills!: Skills[];
  toolsSkills!: Skills[];

  ngOnInit() {
    this.frontEndSkills = [
      { name: 'html', percentage: 95 },
      { name: 'css', percentage: 95 },
      { name: 'javascript', percentage: 85 },
      { name: 'angular', percentage: 75 },
    ];

    this.backEndSkills = [
      { name: '.Net framework', percentage: 75 },
      { name: 'C#', percentage: 80 },
      { name: 'SQL Database', percentage: 80 },
      { name: 'Entity Framework', percentage: 80 },
    ];

    this.toolsSkills = [
      { name: 'Git', percentage: 80 },
      { name: 'Postman', percentage: 85 },
      { name: 'REST APIs', percentage: 85 },
    ];
  }

  getSectionHeight() {
    const section = document.getElementById('about');
    if (section) {
      section.style.height = `${window.innerHeight}px`;
    }
  }
}
