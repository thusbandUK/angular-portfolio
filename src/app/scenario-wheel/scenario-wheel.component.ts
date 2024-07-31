import { Component } from '@angular/core';
import { randomRotate } from '../../assets/scripts/scenarioScript';

@Component({
  selector: 'app-scenario-wheel',
  standalone: true,
  imports: [],  
  template: `
  <!--<div class="collapsible-white-inner" id="collapsible-{{bonusMaterial.componentReference}}-container">--><!--C9-->
  <div class="collapsible-white-inner" id="scenario-wheel"><!--C9-->
  <div class="row container-fluid" id="scenario-wheel-holder">
    <div class="col-md-3">
      <p><button (click)="onClick()" aria-label="Click this button to get a randomly selected scenario then press tab for a summary">Click me to randomly select a situation</button></p> 
    </div>  
  
    <div class="col-md-6">
      <div id="container">
        
        <div id="arrow-container">
          
          <img src="images/arrow-icon.png" alt="arrow">
          
        </div>       
           
        <div class="circle" id="big">                
          <div class="wheel-text" id="big-text1">
            <p>Voles</p>
          </div>
          <div class="wheel-text" id="big-text2">
            <p>Penguins</p>
          </div>
          <div class="wheel-text" id="big-text3">
            <p>Giraffes</p>
          </div>
          <div class="wheel-text" id="big-text4">
            <p>Pigs</p>
          </div>        
        </div>
    
        <div class="circle" id="medium">                
          <div class="wheel-text" id="medium-text1">
            <p>sashay</p>
          </div>
          <div class="wheel-text" id="medium-text2">
            <p>saunter</p>
          </div>
          <div class="wheel-text" id="medium-text3">
            <p>gallop</p>
          </div>
          <div class="wheel-text" id="medium-text4">
            <p>snuffle</p>
          </div>        
        </div>
    
        <div class="circle" id="small">
          <div class="wheel-text" id="small-text1">
            <p>briskly</p>
          </div>
          <div class="wheel-text" id="small-text2">
            <p>softly</p>
          </div>
          <div class="wheel-text" id="small-text3">
            <p>swiftly</p>
          </div>
          <div class="wheel-text" id="small-text4">
            <p>loudly</p>
          </div>        
        </div>    
      </div>
    </div>

    <div class="col-md-3">
      <details class="accessibility-summary">
        <summary aria-label="summary of randomly selected scenario">Click for a read out of the random selection</summary>
        <p id="final-selection">
          Click the button to get a randomly selected scenario.
        </p>
      </details>
      
    </div>
  </div>
  </div><!--XX ends-->
  `,
  styleUrl: './scenario-wheel.component.css'
})
export class ScenarioWheelComponent {  

  //uniqueIdReference = input<string>({alias: 'idReference'});

  onClick():any {
    randomRotate();
  }

}
