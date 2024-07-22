import { Component } from '@angular/core';

@Component({
  selector: 'app-main-title',
  standalone: true,
  imports: [],
  template: `
    <div class="text-start text-box mt-2 mx-auto">
      <div class="main-title-inner">
        <h1 class="pinkText">Tom Husband</h1>
        <div class="row">
          <div class="col-lg-8">
            <p class="fs-5 mb-0 mt-3 sub-title"><strong>Websites that make you feel chemistry</strong></p>
            <p class="fs-5">
              I’m inspired by the potential of the internet to empower people to learn anything they need to, anywhere in the world. My 
              background is in chemistry education but now I’m cultivating the skills I need to build responsive websites with sparkling 
              content. I’m keen to gain professional experience with the long term ambition to launch my own chemistry course online.
            </p>
            <button type="button" onclick="location.href='#get-in-touch';" class="btn my-3 fs-6">              
              Get in touch             
            </button>
          </div>
        </div>        
      </div>
    </div>
  `,
  styleUrl: './main-title.component.css'
})
export class MainTitleComponent {

}
