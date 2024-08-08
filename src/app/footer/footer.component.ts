import { Component, output } from '@angular/core';
import { NgbAccordionModule, NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgbAccordionModule, NgbCollapse],
  template: `
    <nav class="navbar sticky-bottom navbar-expand-lg navbar-dark  mt-5 pb-5">
      <div class="container-fluid  d-flex justify-content-between">      
        <p>&#169;T Husband 2023  |</p>
        <div ngbAccordion #accordion="ngbAccordion"></div>
        <div class="list-group">
          <!--<p><a class="nav-item list-group-item mx-2" id="privacy-collapser" data-bs-toggle="collapse" href="#privacy-collapsible" role="button" href="#">Privacy</a></p>-->
        <button class="nav-item list-group-item mx-2" id="privacy-collapser" (click)="privacyToggle()" role="button">Privacy</button>
        
          </div>
        <button class="navbar-toggler" type="button" (click)="this.isMenuCollapsed = !this.isMenuCollapsed" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"  (shown)="footerMenuAutoScroll($event)" [ngbCollapse]="isMenuCollapsed" id="footerNav">
          <ul class="navbar-nav  ms-auto nav">  
            <!--LinkedIn-->          
            <li class="nav-item">
              <a class="nav-link " aria-label="link to Linked In profile" title="link to Linked In profile" href="https://www.linkedin.com/in/tom-husband-37b39986/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg></a>              
            </li>   
            <!--Github-->
            <li class="nav-item">
             <a class="nav-link" aria-label="link to Github account" title="link to Github account" href="https://github.com/thusbandUK" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
             </svg></a>              
            </li>          
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  //initialises output to bind event in app.component
  privacyToggleSend = output<boolean>()    // OutputEmitterRef<string>

  isMenuCollapsed: boolean = true;
  //initialises variable to track toggle state. See note in parent app.container
  privacy: boolean = false;
  privacyToggle(){
    //emits event to parent app.container    
    this.privacyToggleSend.emit(this.privacy);
    //toggles value of privacy variable
    this.privacy = !this.privacy;
  }
  
  //this is an event listener activated by the ng-bootstrap directives. When the collapsible is shown,
  //the event fires, then the below code scrolls up by the parent offset
  footerMenuAutoScroll(event: any){
    
    let element = document.getElementById('footerNav');
    if (element){
      
      // stated y-axis value effectively scrolls right to the bottom
      window.scrollTo(0,6000)
      
    }

  }

}
