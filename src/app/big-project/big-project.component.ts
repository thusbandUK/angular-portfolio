import { Component, Input } from '@angular/core';
import { BigProjectStructure } from '../bigProjectStructure';
import {CommonModule, NgFor} from '@angular/common';

@Component({
  selector: 'app-big-project',
  standalone: true,
  imports: [NgFor, CommonModule],
  template: `  
  <div id="project-container-1" class="project-container mt-5">
    <div class="project-container-inner mx-auto position-relative d-flex flex-column">
      <div class="project-image-container">    
        <img class="project-image img-fluid" [src]="bigProject.image" alt={{bigProject.imageAlt}} aria-label="front page of Now Chemistry website" title="Now Chemistry website">
      </div>
      <div class="project-text-box right px-4 py-3 rounded-4">
        <h3 class="project-main-text">{{bigProject.title}}</h3>
        <p class="project-main-text mt-3">{{bigProject.description}}</p>
        <p class="project-skills-text">
          &lt;/&gt;
        </p>
        <div class="project-skills-text d-flex justify-content-between">
          <p *ngFor="let item of bigProject.skills">{{item}}</p>
          <a class="nav-link px-lg-1" href={{bigProject.githubUrl}} aria-label="link to Now Chemistry Github repository" title="link to Now Chemistry Github repository" target="_blank"><i class="fa-brands fa-lg fa-github project-main-text"></i></a>
        </div>     
        <button type="button" (click)="openLink(bigProject.siteUrl)" class="btn my-3 fs-6 w-100 project-contact-button">
          Visit Website
        </button>
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


/*

<div id="project-container-1" class="project-container mt-5">
  <div class="project-container-inner mx-auto position-relative d-flex flex-column">
    <div class="project-image-container">    
      <img class="project-image img-fluid" src="./images/screengrabs of sites and snippets/Now Chemistry.png" alt="front page of Now Chemistry website features pink amethyst crystals" aria-label="front page of Now Chemistry website" title="Now Chemistry website">
    </div>
    <div class="project-text-box right px-4 py-3 rounded-4">
      <h3 class="project-main-text">Now Chemistry</h3>
      <p class="project-main-text mt-3">This is a living prototype for my chemistry app. Users can click test tubes to simulate the changes they would witness in the 
        laboratory, such as colour changes or bubbles of gas. Next they can read through explanatory text, answer questions and then 
        receive feedback. The app was created using React-Redux with Bootstrap for styling. The code features components which 
        automatically render content from data stored in javascript objects. </p>
      <p class="project-skills-text">
        &lt;/&gt;
      </p>
      <div class="project-skills-text d-flex justify-content-between">
        <p>JAVASCRIPT</p>
        <P>REACT-REDUX</P>
        <p>BOOTSTRAP</p>
        <a class="nav-link px-lg-1" href="https://github.com/thusbandUK/transition-redux" aria-label="link to Now Chemistry Github repository" title="link to Now Chemistry Github repository" target="_blank"><i class="fa-brands fa-lg fa-github project-main-text"></i></a>

      </div>
     
      <button type="button" onclick="window.open('https://nowchemistry.com/','_blank')" class="btn my-3 fs-6 w-100 project-contact-button">
        Visit Website
      </button>
    </div>
  </div>
</div>
*/