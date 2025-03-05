import { Component, Input } from '@angular/core';
import { BigProjectStructure } from '../bigProjectStructure';
import {CommonModule, NgFor, NgClass, NgComponentOutlet} from '@angular/common';


/*
Renders each big project from bigProject.service.ts

Structure of imported object via BigProjectStructure

Note: NgClass used with modulo to render projects with even-numbered ids with image and text on opposite sides from
projects with odd-numbered ids

*/

@Component({
  selector: 'app-big-project',
  standalone: true,
  imports: [NgFor, CommonModule, NgClass, NgComponentOutlet],
  template: `  
  <div id="project-container-{{bigProject.id}}" class="project-container mt-5">
    <div class="project-container-inner mx-auto position-relative d-flex flex-column">
      <div class="project-image-container" [ngClass]="bigProject.id % 2 === 0 ? 'd-flex justify-content-end' : ''">    
        <img class="project-image img-fluid" [ngClass]="bigProject.id % 2 === 0 ? 'project-image-left' : ''" [src]="bigProject.image" alt={{bigProject.imageAlt}} aria-label="front page of Now Chemistry website" title="Now Chemistry website">
      </div>
      <div class="project-text-box px-4 py-3 rounded-4" [ngClass]="bigProject.id % 2 === 0 ? 'left' : 'right'">
        <h3 class="project-main-text">{{bigProject.title}}</h3>
        <p class="project-main-text mt-3">{{bigProject.description}}</p>
        <p class="project-skills-text">
          &lt;/&gt;
        </p>        
        <div class="project-skills-text d-flex justify-content-between">
          <p *ngFor="let item of bigProject.skills">{{item}}</p>          
          <!--<a class="nav-link px-lg-1" href={{bigProject.githubUrl}} aria-label="link to Now Chemistry Github repository" title="link to Now Chemistry Github repository" target="_blank"><i class="bi bi-github project-main-text"></i></a>-->
        </div>        
        <a href={{bigProject.siteUrl}}  target="_blank" class="btn my-3 fs-6 w-100 project-contact-button">
          Visit Website
        </a>
      </div>
    </div>
  </div>
`,
  styleUrl: './big-project.component.css'
})
export class BigProjectComponent {
  @Input() bigProject!: BigProjectStructure; 

  openLink(s: string){
    window.open(s,'_blank');
  }
  
}