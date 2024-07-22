import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark  background " aria-label="navigation bar">
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand border border-2  bs-navbar-toggler-border-color p-1 py-3" href="#"> &lt;Th\&gt;</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item px-lg-4 mx-lg-1">
              <a class="nav-link" aria-current="page" href="#about-me" target="_self">About</a>
            </li>
            <li class="nav-item px-lg-4 mx-lg-1">
              <a class="nav-link" href="#projects" target="_self">Projects</a>
            </li>
            <li class="nav-item px-lg-4 mx-lg-1">
              <a class="nav-link" href="#bonus-material" target="_self">Bonus Material</a>
            </li>
            <li class="nav-item px-lg-4 mx-lg-1">
              <a class="nav-link" href="#get-in-touch" target="_self">Contact</a>
            </li>
            <li class="nav-item px-lg-4 mx-lg-3">
              <a class="nav-link" href="./files/CV.pdf" target="_blank" download="THusband-CV">CV</a>
            </li>            
            <li class="nav-item p-lg-0">
              <a class="nav-link px-lg-1" aria-label="link to Linked In profile" title="link to Linked In profile" href="https://www.linkedin.com/in/tom-husband-37b39986/" target="_blank"><i class="fa-brands fa-lg fa-linkedin"></i></a>              
            </li>                       
            <li class="nav-item p-lg-0">
              <a class="nav-link px-lg-1" aria-label="link to Github account" title="link to Github account" href="https://github.com/thusbandUK" target="_blank"><i class="fa-brands fa-lg fa-github"></i></a>              
            </li>
          </ul>          
        </div>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
