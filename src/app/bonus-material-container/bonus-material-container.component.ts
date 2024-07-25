import { Component, inject } from '@angular/core';
import { BonusMaterialComponent } from '../bonus-material/bonus-material.component';
import { BonusService } from '../bonus.service';
import { BonusStructure } from '../bonusStructure';
import { NgFor } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-bonus-material-container',
  standalone: true,
  imports: [BonusMaterialComponent, NgFor, NgbModule],
  template: `
    <!--Section title-->
    <div class="text-start mt-5 mb-5 mx-auto">
      <div class="main-title-inner">
        <h2>Bonus material</h2>
      </div>
    </div> <!--section title ends-->
    <div class="row trio-smaller-project-intros accordian" id="accordionParent">
      <app-bonus-material
        class="col-lg-3 col-md-5 collapser accordion-item"
         id="collapser{{bonusMaterial.id}}"
        *ngFor="let bonusMaterial of bonusList"
        [bonusMaterial]="bonusMaterial"    
      ></app-bonus-material>
    </div>
    <!--Accordian eg-->
   <div ngbAccordion>
  <div ngbAccordionItem>
    <h2 ngbAccordionHeader>
      <button ngbAccordionButton>First</button>
    </h2>
    <div ngbAccordionCollapse>
      <div ngbAccordionBody>
        <ng-template>Content for the first item</ng-template>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrl: './bonus-material-container.component.css'
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
