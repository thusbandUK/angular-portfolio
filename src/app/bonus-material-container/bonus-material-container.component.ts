import { Component, inject } from '@angular/core';
import { BonusMaterialComponent } from '../bonus-material/bonus-material.component';
import { BonusService } from '../bonus.service';
import { BonusStructure } from '../bonusStructure';
import { NgFor } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-bonus-material-container',
  standalone: true,
  imports: [BonusMaterialComponent, NgFor, NgbModule, NgbAccordionModule],
  template: `
    <!--Section title-->
    <div class="text-start mt-5 mb-5 mx-auto">
      <div class="main-title-inner">
        <h2>Bonus material</h2>
      </div>
    </div> <!--section title ends-->
    <!--container of trio of bonus material components 1--><!--
    <div class="row trio-smaller-project-intros accordion" id="accordionParent">
      <app-bonus-material
        class="col-lg-3 col-md-5 collapser accordion-item"
         id="collapser{{bonusMaterial.id}}"
        *ngFor="let bonusMaterial of bonusList"
        [bonusMaterial]="bonusMaterial"    
      ></app-bonus-material>
    </div>-->
    <!--container of trio of bonus material components 1 ends-->

    <!--copy of container of trio of bonus material components 1-->
    <div ngbAccordion class="row trio-smaller-project-intros accordion" #accordion="ngbAccordion">
      <app-bonus-material
         class="col-lg-3 col-md-5 collapser accordion-item"
         id="collapser{{bonusMaterial.id}}"
        *ngFor="let bonusMaterial of bonusList"
        [bonusMaterial]="bonusMaterial"
        (toggleSend)="accordion.toggle($event)"
      ></app-bonus-material>
    
      <div 
        *ngFor="let bonusMaterial of bonusList"
        [ngbAccordionItem]="bonusMaterial.id.toString()"
      >
        <div ngbAccordionCollapse>
			    <div ngbAccordionBody>
				    <ng-template>
              
					    <!--<div class="accordion-collapse collapse collapsible col-12" id="collapseExample3"  data-bs-parent="#accordionParent">-->
              <div class="accordion-collapse collapsible col-12" >  
              <div class="card ">
                  <div class="card-body">
                    <div class="card-body-inner lighterbackground rounded-3">
                      <div class="collapsible-heading-button d-flex justify-content-between">
                        <p class="collapsible-heading">{{bonusMaterial.heading}}</p>
                        <!--<button type="button" class="btn-close btn-close-white" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-label="Close"></button>-->
                        <button type="button" class="btn-close btn-close-white" (click)="accordion.collapseAll()" aria-label="Close"></button>
                      </div>
                      <div class="collapsible-white-inner" id="collapsible-horoscope-container">
        
                        <!--horoscope generator code starts--><!--

                        <h3>INSERT HEADING</h3>
  
                        <div id="horoscope-container">
                          <div id="horoscope-text-holder">
                            <p id="text"></p>
                          </div>
                          <img id="planets-image" alt="cartoon planets" src="images/cartoon planets.jpg" onClick="printText();">
                        </div>

                        <!--horoscope generator code finishes-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
				    </ng-template>
			    </div>
		    </div>
      </div> 
  `,
  styleUrl: './bonus-material-container.component.css',
  providers: [NgbAccordionConfig],
})
export class BonusMaterialContainerComponent {

  printText(){
    console.log('print text function works!');
  }

  bonusService: BonusService = inject(BonusService);  
  
  constructor() {    
    this.bonusList = this.bonusService.getAllBonusMaterials();    
    
  }

  bonusList: BonusStructure[] = [];

}


/*

<div ngbAccordion>
     
   <div ngbAccordionCollapse>
       <div ngbAccordionBody>
           <ng-template>Hello</ng-template>
      </div>

     </div>

   </div>
   
<!--Still another accordion example-->
<div ngbAccordion [closeOthers]="true">
	@for (item of items2; track item) {
		<div ngbAccordionItem [collapsed]="item !== 'First'">
			<h2 ngbAccordionHeader>
				<button ngbAccordionButton>{{ item }}</button>
			</h2>
			<div ngbAccordionCollapse>
				<div ngbAccordionBody>
					<ng-template>
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
						officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
						wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
						Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
						excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
						you probably haven't heard of them accusamus labore sustainable VHS.
					</ng-template>
				</div>
			</div>
		</div>
	}
</div>
<!--Still another accordion example ENDS-->
*/