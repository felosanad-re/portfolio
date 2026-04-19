import { Component } from '@angular/core';
import { Skills } from '../../Core/InterFaces/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  frontEndSkills!: Skills[];
  backEndSkills!: Skills[];
  toolsSkills!: Skills[];

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
}
