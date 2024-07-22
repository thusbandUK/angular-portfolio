import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  template: `
    <div class="text-start mt-5 mx-auto">
      <div class="main-title-inner">
        <h2>About</h2>
        <div class="row">
          <div class="col-lg-4">
            <p>
              Hi, my name is Tom. My interest in web development began with the ambition to build my own app to teach chemistry.  
              My passion for chemistry began at school and blossomed through a batchelors degree and a teaching career. Those stem skills 
              have proven invaluable in my journey to learn coding. Turns out that scrutinising technical information to ensure that vital 
              details are expressed correctly is a home from home for me.
            </p> 
          </div>
          <div class="col-lg-4">
            <p>
              Since I signed up for the Codecademy Full Stack Engineering course, I’ve already set my newfound skills to work crafting a 
              prototype for my chemistry app. I’ve also taken on two paid commissions: one for the debut publication of a children’s book author, 
              another showcasing the talents of an artisan who creates frames
            </p>
            <p>
              Now I’m looking to gain professional experience to take my skills to the next level.
            </p>                   
          </div>
          <div class="col-lg-4">
            <div id="skills-container" class="container">
              <i class="fa-regular fa-star"></i>
              <div id="list-of-skills">
                <h3 class="ps-3">
                  Skills
                </h3>
                <ul class="list ps-3">
                  <li>JAVASCRIPT</li>
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>REACT</li>
                  <li>NODE.JS</li>
                  <li>EXPRESS</li>
                </ul>
              </div>      
            </div>
          </div>        
        </div>        
      </div>
    </div>
  `,
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
