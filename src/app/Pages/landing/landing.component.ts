import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { WorksComponent } from '../works/works.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HomeComponent, AboutComponent, SkillsComponent, WorksComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
