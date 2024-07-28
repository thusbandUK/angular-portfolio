import { Component, inject } from '@angular/core';
import { BonusMaterialComponent } from '../bonus-material/bonus-material.component';
import { BonusService } from '../bonus.service';
import { BonusStructure } from '../bonusStructure';
import { NgFor } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionTestComponent } from '../accordion-test/accordion-test.component';
import { AccordionTestStructure } from '../accordionTestStructure';
import { AccordionService } from '../accordion.service';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bonus-material-container',
  standalone: true,
  imports: [BonusMaterialComponent, NgFor, NgbModule, AccordionTestComponent, NgbAccordionModule],
  template: `
    <!--Section title-->
    <div class="text-start mt-5 mb-5 mx-auto">
      <div class="main-title-inner">
        <h2>Bonus material</h2>
      </div>
    </div> <!--section title ends-->
    <!--container of trio of bonus material components 1-->
    <div class="row trio-smaller-project-intros accordion" id="accordionParent">
      <app-bonus-material
        class="col-lg-3 col-md-5 collapser accordion-item"
         id="collapser{{bonusMaterial.id}}"
        *ngFor="let bonusMaterial of bonusList"
        [bonusMaterial]="bonusMaterial"    
      ></app-bonus-material>
    </div>
    <!--container of trio of bonus material components 1 ends-->
    <!--Accordion eg--><!--
   <div ngbAccordion class="d-flex w-100"  #accordion="ngbAccordion"><!--
   
     <!--<div ngbAccordionItem  ngbAccordionItem={{accordionItem.id}}>--><!--
     
       <app-accordion-test 
       
        *ngFor="let accordionItem of accordionList; track accordionItem" [accordionItem]="accordionItem"
         [ngbAccordionItem]="accordionItem.id"
         ngbAccordionItem
         [id]="accordionItem.id"
        ></app-accordion-test>
       <!--<h2 ngbAccordionHeader>
         <button ngbAccordionButton>{{item}}</button>
       </h2>
       <div ngbAccordionCollapse>
         <div ngbAccordionBody>
           <ng-template>Content for the {{item}} item</ng-template>
         </div>
       </div>
     </div>--><!--
    </div>-->

    <!--Another accordion example-->
    <div ngbAccordion class="d-flex flex-row">
      <div ngbAccordionItem
        *ngFor="let accordionItem of accordionList"
        [ngbAccordionItem]="accordionItem.id"    
      >
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>{{accordionItem.id}}</button>
        </h2>
        <div>
          <app-accordion-test            
            [accordionItem]="accordionItem" 
             ngbAccordionCollapse
          >
          </app-accordion-test>
        </div>
      </div>
<!--Another accordion example ENDS-->

   </div>
   
 
  `,
  styleUrl: './bonus-material-container.component.css'
})
export class BonusMaterialContainerComponent {

  printText(){
    console.log('print text function works!');
  }

  bonusService: BonusService = inject(BonusService);
  accordionService: AccordionService = inject(AccordionService);
  
  constructor() {    
    this.bonusList = this.bonusService.getAllBonusMaterials();
    this.accordionList = this.accordionService.getAllAccordionId();
  }  
  
  bonusList: BonusStructure[] = [];
  accordionList: AccordionTestStructure[] = []

  items: AccordionTestStructure[] = [];
  items2 = ['First', 'Second', 'Third'];

}


/*
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