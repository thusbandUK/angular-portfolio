import { Component, Input } from '@angular/core';
import { BonusMaterialContainerComponent } from '../bonus-material-container/bonus-material-container.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionTestStructure } from '../accordionTestStructure';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-accordion-test',
  standalone: true,
  imports: [NgbModule, NgbAccordionModule],
  template: `
  
       <h2 ngbAccordionHeader>
         <button ngbAccordionButton>{{accordionItem.id}}</button>
       </h2>
       <div ngbAccordionCollapse>
         <div ngbAccordionBody>
           <ng-template>
           <h2>I say what the devil is happening?</h2>
           <p>Content for the {{accordionItem.id}} </p>
           </ng-template>
         </div>
       </div>
  
  `,
  styleUrl: './accordion-test.component.css'
})
export class AccordionTestComponent {
 
  @Input() accordionItem!: AccordionTestStructure;

  
}
