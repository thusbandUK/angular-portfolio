import { Component, Input, output } from '@angular/core';
import { BonusStructure } from '../bonusStructure';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bonus-material',
  standalone: true,
  imports: [NgbModule, NgbAccordionModule],
  template: `
  <!--Collapser Displayer-->
    
        <div class="card shadow-sm minor-project-description-container m-lg-2 rounded-4"><!--D1-->
          
          <div><!--D2-->
            <img class="img-fluid rounded-top-4" [src]="bonusMaterial.image" alt={{bonusMaterial.imageAlt}} aria-label="a trio of alternate stylings for the Rave Frames website" title="Raven Frames alternate landing pages">
          </div><!--D2 ends-->
          
          <div class="card-body d-flex flex-column justify-content-between"><!--D3-->
            <div class="card-body-text-container"><!--D4-->
              <h3 class="card-heading">{{bonusMaterial.heading}}</h3>
              <p class="card-text">{{bonusMaterial.description}}</p>
            </div><!--D4 ends-->
            <div class="d-flex justify-content-between align-items-center mt-1"><!--D5-->
              <div class="btn-group w-100"><!--D6-->
                <!--drop down button-->                
                <p class="w-100">
                  <button class="btn btn-primary w-100" type="button" (click)="toggleClick(bonusMaterial.id.toString())">
                    View demo
                  </button>                  
                </p>                
              </div><!--D6 ends-->              
            </div><!--D5 ends-->
          </div><!--D3 ends-->
        </div><!--D1 ends-->
      `,
  styleUrl: './bonus-material.component.css'
})
export class BonusMaterialComponent {
  @Input() bonusMaterial!: BonusStructure;

  toggleSend = output<string>()    // OutputEmitterRef<string>

  toggleClick(id: string){
    //idMarker helps to create a more readable #id tag for css
    let idMarker = 'collapsibleContent';
    //the numerical id for each section of bonus material is passed in string form to act as event emitter
    //this is then combined with the idMarker to synch with the readable id tags
    //console.log(idMarker+id)
    this.toggleSend.emit(idMarker+id);    
  }  

  customCollapseAll = output()

  customCollapseClick(){
    this.customCollapseAll.emit();
  }

  //(click)="accordion.collapseAll()"
  constructor(){
    
  }

}

/*
 data-bs-target="#collapseExample{bonusMaterial.id}"

<div class="accordion-collapse collapse collapsible col-12" id="collapseExample{{bonusMaterial.id}}"  data-bs-parent="#accordionParent">
  <div class="card ">
    <div class="card-body">
    <div class="card-body-inner lighterbackground rounded-3">
      <div class="collapsible-heading-button d-flex justify-content-between">
        <p class="collapsible-heading">Random horoscope generator</p>
        <button type="button" class="btn-close btn-close-white" (click)="customCollapseClick()" aria-label="Close"></button>
      </div>
      <div class="collapsible-white-inner" id="collapsible-horoscope-container">
        
        <!--horoscope generator code starts-->

        <h3>Click the planets to view your horoscope</h3>
  
          <div id="horoscope-container">
            <div id="horoscope-text-holder">
              <p id="text"></p>
            </div>
            <img id="planets-image" src="images/cartoon planets.jpg" onClick="printText();">
          </div>


        <!--horoscope generator code finishes-->
      </div>
    </div>
    </div>
  </div>
</div>

*/