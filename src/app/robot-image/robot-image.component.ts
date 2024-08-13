import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-robot-image',
  standalone: true,
  imports: [],
  template: `
  <div class="mx-auto">
    <img class="robot-image" [src]="imageUrl" #image/>
  </div>
  `,
  styleUrl: './robot-image.component.css'
})
export class RobotImageComponent implements OnChanges {
  //imports new search string from parent 
  @Input() robotSearchString3: string = "sexy-transmasc-robot"
  @Input() background: number = 2;
  //assigns variable by which to update src value for img element
  @ViewChild('image') image!: ElementRef;

  //searchString2: string = 'pink-transfemme-robot'
  imageUrl: string = `https://robohash.org/sexy-transmasc-robot.png?bgset=bg1`

  ngOnChanges(changes: SimpleChanges){
    if (this.image){
      console.log('ngOnChanges triggered');
      //this.image.nativeElement.src = this.imageUrl;
      console.log(this.imageUrl)
      this.image.nativeElement.src = `https://robohash.org/${this.robotSearchString3}.png?bgset=bg${this.background}`;
    }    
  }

}
