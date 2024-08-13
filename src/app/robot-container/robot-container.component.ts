import { Component } from '@angular/core';
import { RobotImageComponent } from '../robot-image/robot-image.component';

@Component({
  selector: 'app-robot-container',
  standalone: true,
  imports: [RobotImageComponent],
  host: {
    'style': 'display: flex; height: 90vh;'
  },
  template: `
  <div class="collapsible-white-inner w-100">
    <div id="experiment" style="height: 100%">
    <form id="form" class="d-flex flex-column align-items-center">
        <input #input type="text" placeholder="Enter your keywords" />
        <div class="d-flex">
          <button class="primary" type="button" (click)="send(input.value)">Search</button>
          <button class="primary" type="button" (click)="sendBackground()">Other background</button>
        </div>
      </form>      
      <app-robot-image
        [robotSearchString3]="robotSearchString3"
        [background]="background"
        class="d-flex mx-auto"
        id="robot-image-app-container"
      ></app-robot-image>
    </div>
  </div>  
  `,
  styleUrl: './robot-container.component.css'
})
export class RobotContainerComponent {

  //heightForm = document.getElementById("form").offsetHeight;
  //heightContainer = document.getElementById("experiment");
  
  robotSearchString3 = "";
  submitFormValue(searchString: string){
    console.log('submitFormValue triggered');
  }

  
  background: number = 1;

  send(searchString: string){
    console.log(this.robotSearchString3)
    console.log('send function triggered')
    this.robotSearchString3 = searchString;
    console.log(this.robotSearchString3);
    
  }

  sendBackground(){
    (this.background === 1) ? this.background = 2 : this.background = 1;

  }

}
