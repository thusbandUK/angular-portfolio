import { Component, ViewChild, ElementRef, AfterContentInit, HostListener, output } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  template: `
    <div class="text-start mt-5 mx-auto" #aboutMe>
      <div class="main-title-inner">
        <h2>About</h2>
        <div class="row">
          <div class="col-lg-4">
            <p>
              Hi, my name is Tamsin. My interest in web development began with the ambition to build my own app to teach chemistry.  
              My passion for chemistry began at school and blossomed through a bachelors degree and a teaching career. Those stem skills 
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
              <!--renders star via bootstrap icons-->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
              </svg>              
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
                  <li>WORDPRESS</li>
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
export class AboutMeComponent  {

  @ViewChild('aboutMe') aboutMe!: ElementRef;

  yPosition: string = 'hello'
 

  
/*

  @HostListener('window:scroll') // for window scroll events removed: , ['$event'] 
  onScroll() {  //removed: event: any 
  
    console.log(this.aboutMe.nativeElement.getBoundingClientRect().y)

  
  
  }*/

}
