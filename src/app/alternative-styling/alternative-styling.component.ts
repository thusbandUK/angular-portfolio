import { Component } from '@angular/core';

@Component({
  selector: 'app-alternative-styling',
  standalone: true,
  imports: [],
  host: {
    'style': 'display: flex;'
  },
  template: `
  <div class="collapsible-white-inner w-100">
  <div id="trio-of-raven-landing-pages" class="row w-100 d-flex-inline justify-content-around" style="height: 60vh;">
      <div class="col-md-3 m-2 d-flex align-items-center">
        <div id="left-photo" class="m-auto" style="background-color: red;">
          <div class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner d-flex">
              <div class="carousel-item active position-relative" data-bs-interval="4000" >
                
                <img src="./assets/Carousel images/1.jpg" class="d-block" alt="photograph of grey panelled double doors with homewares and plants in foreground and framing workshop in background">
              </div>
             
              <div class="carousel-item" data-bs-interval="4000">
                <img src="./assets/Carousel images/2.jpg" class="d-block" alt="closeup of corner of wooden frame">
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img src="./assets/Carousel images/3.jpg" class="d-block" alt="art print on desk with white frame chevron at corner">
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img src="./assets/Carousel images/4.jpg" class="d-block" alt="photograph of workshop scene with frame chevrons on back wall and grey carpeted bench">
              </div>
               
            </div>
            
          </div>
    
        </div>
    
      </div>
      <div class="col-md-3 m-2 d-flex align-items-center" style="position: relative;">
        <div id="middle-photo" class="m-auto" style="background-color: yellow;">
          <div class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="4000" >      
                <img src="./assets/Carousel images/1.jpg" class="d-block" alt="photograph of grey panelled double doors with homewares and plants in foreground and framing workshop in background">
              </div>   
              <div class="carousel-item" data-bs-interval="4000">
                <img src="./assets/Carousel images/2.jpg" class="d-block " alt="closeup of corner of wooden frame">
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img src="./assets/Carousel images/3.jpg" class="d-block " alt="art print on desk with white frame chevron at corner">
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img src="./assets/Carousel images/4.jpg" class="d-block " alt="photograph of workshop scene with frame chevrons on back wall and grey carpeted bench">
              </div>
               
            </div>
            
          </div>
    
        </div>
    
      </div>
      <div class="col-md-3 m-2 d-flex align-items-center">
        <div id="right-photo" class="m-auto" style="background-color: red;">
          <div id="mobile-container">
            <div class="inner-container">
              <div class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active " data-bs-interval="4000" >
                    <img src="./assets/Carousel images/1.jpg" class="d-block" alt="photograph of grey panelled double doors with homewares and plants in foreground and framing workshop in background">
                  </div>   
                  <div class="carousel-item" data-bs-interval="4000">
                    <img src="./assets/Carousel images/2.jpg" class="d-block" alt="closeup of corner of wooden frame">
                  </div>
                  <div class="carousel-item" data-bs-interval="4000">
                    <img src="./assets/Carousel images/3.jpg" class="d-block " alt="art print on desk with white frame chevron at corner">
                  </div>
                  <div class="carousel-item" data-bs-interval="4000">
                    <img src="./assets/Carousel images/4.jpg" class="d-block" alt="photograph of workshop scene with frame chevrons on back wall and grey carpeted bench">
                  </div>     
                </div>  
              </div>
            </div>
            <div class="inner-container">
              <div class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active position-relative" data-bs-interval="4000">
                    <img src="./assets/Carousel images/4.jpg" class="d-block" alt="photograph of workshop scene with frame chevrons on back wall and grey carpeted bench">
                  </div>
                  <div class="carousel-item" data-bs-interval="4000" >
                    <img src="./assets/Carousel images/1.jpg" class="d-block" alt="photograph of grey panelled double doors with homewares and plants in foreground and framing workshop in background">
                  </div>   
                  <div class="carousel-item" data-bs-interval="4000">
                    <img src="./assets/Carousel images/2.jpg" class="d-block" alt="closeup of corner of wooden frame">
                  </div>
                  <div class="carousel-item" data-bs-interval="4000">
                    <img src="./assets/Carousel images/3.jpg" class="d-block" alt="art print on desk with white frame chevron at corner">
                  </div>             
                </div>  
              </div>
            </div>
            <div class="inner-container">
              <div class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active position-relative" data-bs-interval="4000">
                    <img src="./assets/Carousel images/3.jpg" class="d-block" alt="art print on desk with white frame chevron at corner">
                  </div>
                  <div class="carousel-item" data-bs-interval="4000">
                    <img src="./assets/Carousel images/4.jpg" class="d-block" alt="photograph of workshop scene with frame chevrons on back wall and grey carpeted bench">
                  </div>     
                  <div class="carousel-item" data-bs-interval="4000" >
                    <img src="./assets/Carousel images/1.jpg" class="d-block" alt="photograph of grey panelled double doors with homewares and plants in foreground and framing workshop in background">
                  </div>   
                  <div class="carousel-item" data-bs-interval="4000">
                    <img src="./assets/Carousel images/2.jpg" class="d-block" alt="closeup of corner of wooden frame">
                  </div>        
                </div>  
              </div>
            </div>
          </div>
    
        </div>
    
      </div>
    </div>
    </div>
  `,
  styleUrl: './alternative-styling.component.css'
})
export class AlternativeStylingComponent {

}
