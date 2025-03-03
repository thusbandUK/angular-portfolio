import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ElephantAnimationComponent } from '../elephant-animation/elephant-animation.component';

@Component({
  selector: 'app-elephant',
  standalone: true,
  imports: [NgClass, ElephantAnimationComponent],
  template: `  
  <div id="project-container-elephant" class="project-container mt-5">
    <div class="project-container-inner mx-auto position-relative d-flex flex-column">
      <div class="project-image-container position-relative" [ngClass]="2 % 2 === 0 ? 'd-flex justify-content-end' : ''">    
      <!--INSERT ANIMATION HERE-->
      <!--  
      
      <img class="project-image img-fluid" [ngClass]="2 % 2 === 0 ? 'project-image-left' : ''" src="./assets/screengrabs of sites and snippets/white-background.png" alt="PLACEHOLDER" aria-label="front page of Now Chemistry website" title="Now Chemistry website">
        -->
        <div class="project-image img-fluid bg-white position-relative elephant-animation-white-background">
          <div class="position-absolute elephant-position">  
            <app-elephant-animation>
            </app-elephant-animation>
          </div>
        </div>
      
      </div>
      <div class="project-text-box px-4 py-3 rounded-4" [ngClass]="2 % 2 === 0 ? 'left' : 'right'">
        <h3 class="project-main-text">Chemistry Elephant</h3>
        <p class="project-main-text mt-3">A flashcards app for A-level chemistry students</p>
        <p class="project-skills-text">
          &lt;/&gt;
        </p>        
        <div class="project-skills-text d-flex justify-content-between">
          <!--RECONNECT SKILLS, LOCAL ARRAY IMPORT-->
          <!--<p *ngFor="let item of bigProject.skills">{{item}}</p>-->
          <!--<a class="nav-link px-lg-1" href={{bigProject.githubUrl}} aria-label="link to Now Chemistry Github repository" title="link to Now Chemistry Github repository" target="_blank"><i class="bi bi-github project-main-text"></i></a>-->
        </div>
        <a href="https://ce-fullstack3-hzaf.vercel.app/" class="btn my-3 fs-6 w-100 project-contact-button">
          Visit Website
        </a>
      </div>
    </div>
  </div>
`,
  styleUrls: ['../big-project/big-project.component.css', './elephant.component.css']
})
export class ElephantComponent {

}

//<img class="project-image img-fluid" [ngClass]="2 % 2 === 0 ? 'project-image-left' : ''" src="assets/card-thumbnails/horoscope.png" alt="PLACEHOLDER" aria-label="front page of Now Chemistry website" title="Now Chemistry website">
