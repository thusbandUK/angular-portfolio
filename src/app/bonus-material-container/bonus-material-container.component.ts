import { Component, inject, ViewChild, OnInit, ElementRef } from '@angular/core';
import { BonusMaterialComponent } from '../bonus-material/bonus-material.component';
import { BonusService } from '../bonus.service';
import { BonusStructure } from '../bonusStructure';
import { NgFor, NgComponentOutlet } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { HoroscopeComponent } from '../horoscope/horoscope.component';
import { ScenarioWheelComponent } from '../scenario-wheel/scenario-wheel.component';
import { AlternativeStylingComponent } from '../alternative-styling/alternative-styling.component';
import { RobotContainerComponent } from '../robot-container/robot-container.component';


@Component({
  selector: 'app-bonus-material-container',
  standalone: true,
  imports: [BonusMaterialComponent, NgFor, NgbModule, NgbAccordionModule, NgComponentOutlet, HoroscopeComponent, ScenarioWheelComponent, AlternativeStylingComponent, RobotContainerComponent],
  template: `
    <!--Section title-->
    <div class="text-start mt-5 mb-5 mx-auto">
      <div class="main-title-inner">
        <h2>Bonus material</h2>
      </div>
    </div> <!--section title ends-->
    
    <!--the ngbAccordion div contains both the bonusMaterial (BM) intro cards and the BM collapsible content.
    Notice that it also acts as the flex container, rendering the cards 3 columns to a desktop page. This is
    important both for the above-described styling but also for the div to have display flex, which enables the
    BM intro cards and collapsible materials to be rendered in a different order depending on whether they are being
    viewed on a smaller or larger screen-->
<div ngbAccordion #accordion="ngbAccordion" id="bonus-accordion-parent" (shown)="logEvent($event)" [closeOthers]="true" class="row trio-smaller-project-intros">
    
    <!--<div class="row trio-smaller-project-intros acccordion">-->    
      <app-bonus-material
         class="col-lg-3 col-md-5 collapser accordion-item accordion"
         id="collapseDisplayer{{bonusMaterial.id}}"
        *ngFor="let bonusMaterial of bonusList"
        [bonusMaterial]="bonusMaterial"
        (toggleSend)="accordion.toggle($event)"
        
      ></app-bonus-material>
    <!--</div>--><!--this might need to be moved for the ordering css to work-->
    
    
    
     
    

    <!--container of trio of bonus material collapsible sections-->
    
      <div 
        *ngFor="let bonusMaterial of bonusList"
        [ngbAccordionItem]="'collapsibleContent'+bonusMaterial.id.toString()"
        
      ><!--C1-->
        <div ngbAccordionCollapse><!--C2-->
			    <div ngbAccordionBody><!--C3-->
				    <ng-template>
              
					    <!--<div class="accordion-collapse collapse collapsible col-12" id="collapseExample3"  data-bs-parent="#accordionParent">-->
              <div class="accordion-collapse collapsible col-12" ><!--C4-->
              <div class="card "><!--C5-->
                  <div class="card-body"><!--C6-->
                    <div class="card-body-inner lighterbackground rounded-3"><!--C7-->
                      <div class="collapsible-heading-button d-flex justify-content-between"><!--C8-->
                        <p class="collapsible-heading">{{bonusMaterial.heading}}</p>
                        <!--<button type="button" class="btn-close btn-close-white" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-label="Close"></button>-->
                        <button type="button" class="btn-close btn-close-white" (click)="accordion.collapseAll()" aria-label="Close"></button>
                      </div><!--C8 ends-->
                      
                      
        
                        <ng-container 
                        *ngComponentOutlet="getBonusContent(bonusMaterial.componentReference)"                        
                        class="collapsible-white-inner"
                        style="display: flex;"
                        
                        
                        
                        
                        />                       
                       
                      
                    </div><!--C7 ends-->
                  </div><!--C6 ends-->
                </div><!--C5 ends-->
              </div><!--C4 ends-->
				    </ng-template>
			    </div><!--C3 ends-->
		    </div><!--C2 ends-->
      </div><!--C1 ends-->
    
  </div>
    
  `,
  styleUrls: ['./bonus-material-container.component.css', '../scenario-wheel/scenario-wheel.component.css'],
  providers: [NgbAccordionConfig],
})
export class BonusMaterialContainerComponent  {

  //@ViewChild(BonusMaterialComponent) scenario!: BonusMaterialComponent;

  //this (in tandem with "(shown)="logEvent($event)"" in ngbAccordion) triggers an event when a collapsible is opened
  //and it gives the id of the collapsible
 logEvent(event: any){
  console.log('log event triggered');
  console.log(event);
  let element = document.getElementById(event);
  let parent = document.getElementById("bonus-accordion-parent");
  console.log(element);

  //Finds the vertical position of the element within the window

  if (element && parent){
    var windowPositionElement = element.getBoundingClientRect().y;

  //Finds the vertical position of the parent element relative to the window
  
  var windowPositionParent = parent.getBoundingClientRect().y;

  //Combines the above values with the vertical height above the parent element
  
  var scrollOffset = parent.offsetTop + windowPositionElement - windowPositionParent;

  window.scroll({
      top: scrollOffset,               
      left: 0, 
      behavior: 'smooth'
  })

  }
  
 }
/*
  ngOnInit(): void {
    console.log('bonus material ngOnInit called')
    console.log(this.scenario);
  }*/
  
  getBonusContent(id: string){    
    
    switch(id){
      case "scenarioWheel": {
        return ScenarioWheelComponent;
        break;}
      case "horoscope": {
        return HoroscopeComponent;
        break;}
      case "robotGenerator": {
        return RobotContainerComponent;
        break;}
      default: {
        return null;
      }
    }   
    
  }

  printText(){
    console.log('print text function works!');
  }

  bonusService: BonusService = inject(BonusService);  
  
  constructor() {    
    this.bonusList = this.bonusService.getAllBonusMaterials();    
    
  }

  bonusList: BonusStructure[] = [];

}