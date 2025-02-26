import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-elephant-animation',
  standalone: true,
  imports: [NgClass],
  template: `  
  <svg className="m-auto" width="100" height="100" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
    
    <g filter="url(#filter0_d_7400_5)">
      <path        d="M100 551.167C100 540.122 108.954 531.167 120 531.167H345.707C356.753 531.167 365.707 540.122 365.707 551.167V697.162C365.707 708.208 356.752 717.162 345.707 717.162H120C108.954 717.162 100 708.208 100 697.162V551.167Z"
        id="color-section-1"        
        style="fillOpacity: 1;"
        fill="white" 
      />
      <path
        d="M384.948 551.167C384.948 540.122 393.902 531.167 404.948 531.167H630.654C641.7 531.167 650.654 540.122 650.654 551.167V697.162C650.654 708.208 641.7 717.162 630.654 717.162H404.948C393.902 717.162 384.948 708.208 384.948 697.162V551.167Z"
        id="color-section-2"
        fill="white"
        style="fillOpacity: 1;"        
      />
      <!---->
      <ellipse id="color-section-7" cx="637.369" cy="352.503" rx="20.6152" ry="21.0733" style="fill: white; fillOpacity: 1;"  />
      <path
        d="M668.979 554.99C668.979 673.801 737.741 710.602 781.662 716.237C791.978 717.561 800 708.796 800 698.394V352.346C800 341.3 791.046 332.346 780 332.346H688.979C677.933 332.346 668.979 341.259 668.979 352.304V554.99Z"
        id="color-section-3"
        fill="white" 
        style="fillOpacity: 1;" 
      />
      <path
        d="M638.295 183C756.847 183 793.57 251.758 799.195 295.679C800.516 305.998 791.751 314.021 781.348 314.021L404.948 314.021C393.902 314.021 384.948 305.067 384.948 294.021L384.948 203C384.948 191.954 393.853 183 404.899 183L638.295 183Z"
        id="color-section-4"
        fill="white" 
        style="fillOpacity: 1;" 
      />
      <path
        d="M254.821 329.597C139.823 329.597 105.246 442.31 100.574 495.389C99.6621 505.752 108.239 513.759 118.642 513.759L345.707 513.759C356.752 513.759 365.707 504.805 365.707 493.759L365.707 349.597C365.707 338.551 356.812 329.597 345.766 329.597L254.821 329.597Z"
        id="color-section-5"
        fill="white" 
        style="fillOpacity: 1;" 
      />
      <path
        d="M545.773 514.675C425.251 514.675 389.282 402.61 384.585 348.871C383.68 338.506 392.283 330.513 402.687 330.513L585.759 330.513C596.805 330.513 605.759 339.467 605.759 350.513L605.759 494.675C605.759 505.721 596.807 514.675 585.761 514.675L545.773 514.675Z"
        id="color-section-6"
        fill="white" 
        style="fillOpacity: 1;" 
      />
      
    </g>
    
    <defs>
      <filter id="filter0_d_7400_5" x="93" y="177" width="720" height="554.162" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="3" dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7400_5" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7400_5" result="shape" />
      </filter>
    </defs>
    <!---->
  </svg>
  `,  
  styleUrl: './elephant-animation.component.css'
  
})
export class ElephantAnimationComponent implements OnInit {

  //Very specific, it takes an array of numbers and either reverses the whole thing or doesn't
  //This is so the "domino finish" effect where all the tiles on the elephant change colour
  //randomly goes in either one direction or the other

  
  sequenceRandomiser = (array: number[]) => {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0){
      return array;
    }
    const reversedArray = [];
    for (let x = array.length - 1; x >= 0; x--){
      reversedArray.push(array[x]);
    }
    return reversedArray;
   }

  //also very specific - these are the timings in which the "flickering on" colour changes
  //happen in the elephant, it also instructs them at which time to revert to white
  timeoutArray = [0,500,700,600,800, 1200, 1350, 1200, 1350, 2500, 2700, 2600, 2800, 2700, 2900]

  //hexcodes of the four possible colours for the elephant tiles
  colors = ['#f28972', '#F2C48D', '#D98FBF', '#8268A6'];

  //at the end of the animation, all of the tiles of the elephant turn one colour and it can be
  //one of the four colours above. Currently the function printColorChoiceAndSection below writes
  //in the first colour selected, but that could be good to move out to a separate function
  finalColor = "";

  /*
  summary: printColorChoiceAndSection is responsible for the initial "flickering" of the elephant,
  before it completely changes to one new colour

  printColorChoiceAndSection is a recursive function that takes an array, initially of the numbers 1 to 7
  and an index. If either the index is above 8 or the array has zero length, it automatically returns.
  The numbers in the passed array relate to sections of the elephant. The function selects a number 
  from the array and randomly generates a colour. The random number is also removed from the array. 
  The function then turns the corresponding elephant panel the randomly selected colour, before then 
  restoring it back to white. Those changes occur according to the timings in the external timeoutArray,
   which are selected by timeoutIndex, which is incremented by 1 with each pass of the function. 
  The function is recursive and the same arguments are passed, but now a smaller pool of numbers is
  available, so that the same panels are not selected for random colouring twice. Ultimately timeoutIndex
  increases above 8 and the function stops
  */

  //Initially this should be passed [1,2,3,4,5,6,7]
  printColorChoiceAndSection = (passedNumberArray: number[], passedTimeoutIndex: number) => {
    
    if (passedTimeoutIndex >=8){      
      return
    }
    
    if (passedNumberArray.length === 0){      
      return}
    
      const selections = {
          section: 0,
          color: ""
      }
      
      const randomPosition = Math.floor(Math.random() * passedNumberArray.length);
      selections.section = passedNumberArray.splice(randomPosition,1)[0];      
        
      const randomColorNumber = Math.floor(Math.random() * 4);
      selections.color = this.colors[randomColorNumber];
      this.finalColor === "" ? this.finalColor = selections.color : null;
      
      setTimeout(() => {
        const element = document.getElementById(`color-section-${selections.section.toString()}`)?.style;
        if (element){          
          element.fill = selections.color;
        }        
      }, this.timeoutArray[passedTimeoutIndex = passedTimeoutIndex + 1])  
  
      setTimeout(() => {
        const element = document.getElementById(`color-section-${selections.section.toString()}`)?.style;
        if (element){          
          element.fill = 'white';
        }        
      }, this.timeoutArray[passedTimeoutIndex = passedTimeoutIndex + 1])      
  
      this.printColorChoiceAndSection(passedNumberArray, passedTimeoutIndex)
  }

  /*
  summary: causes the "domino rally" finish of phase two of the animation, when all the tiles
  sequentially turn one colour

  works similarly to printColorChoiceAndSection in that it is recursive. It is passed an array
  of either the numbers 1 to 7 or the same numbers but in reverse (see sequenceRandomiser function).
  It is also passed timeout2, like timeoutIndex, timeout2 is increment with each iteration of the function,
  which causes the time delay for the "domino rally" (instead of all tiles changing colour at once)
  */
  dominoFinish = (passedRandomisedDominoArray: number[], passedTimeout2: number) => {    
    
    if (passedRandomisedDominoArray.length === 0){      
      return
    }    
  
    const selections: any = {
      section: 0,
      color: ""  
    }
  
    selections.section = passedRandomisedDominoArray.pop();
  
    setTimeout(() => {
      const element = document.getElementById(`color-section-${selections.section.toString()}`)?.style;
      if (element){          
        element.fill = this.finalColor;
      }
    }, passedTimeout2 = passedTimeout2 + 25)
  
    this.dominoFinish(passedRandomisedDominoArray, passedTimeout2)  
  
  }

    //This initiates the animation sequence on page load 
  ngOnInit(): void {

    const colourSet = [1,2,3,4,5,6,7]

    setInterval(() => {

      /*These are all the values passed to the functions, during the cycle the arrays will
      shorten in length until they are empty, which stops the recursive functions */
      const numberArray = [1,2,3,4,5,6,7]
      const dominoArray = [7,6,5,4,3,2,1]
      const randomisedDominoArray = this.sequenceRandomiser(dominoArray);

      //increments with each pass through printColorChoiceAndSection, to select the correct
      //time from this.timeoutArray, which never changes
      let timeoutIndex = 0;
      
      //increments with each pass through dominoFinish, to create the "domino rally" timing
      let timeout2 = 1800

      //turns all the panels back to white at the end of the cycle
      setTimeout(() => {
        colourSet.forEach((x)=> {        
          const element = document.getElementById(`color-section-${x.toString()}`)?.style
          if (element) {
            element.fill = 'white'
          }
        })
      }, 7000)
          

      //calls the named functions

      //causes the initial blinking of the first four panels to light up
      this.printColorChoiceAndSection(numberArray, timeoutIndex)

      //causes the whole elephant to turn one randomly selected colour
      this.dominoFinish(randomisedDominoArray, timeout2)      

      //time of each interval cycle: 8 seconds
    }, 8000)    
      
    }

}

//below you can see the image call that needs to be replaced with something else
//function let(target: ElephantAnimationComponent, propertyKey: 'colorExperiment'): void {
  //throw new Error('Function not implemented.');
//}
//template: `<img class="project-image img-fluid" [ngClass]="2 % 2 === 0 ? 'project-image-left' : ''" src="assets/card-thumbnails/horoscope.png" alt="PLACEHOLDER" aria-label="front page of Now Chemistry website" title="Now Chemistry website">`,