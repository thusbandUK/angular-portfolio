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
        <div ngbAccordionBody>
           <ng-template>
             Content for the {{accordionItem.id}} 
           </ng-template>  
        </div>      
           
  `,
  styleUrl: './accordion-test.component.css'
})
export class AccordionTestComponent {
 
  @Input() accordionItem!: AccordionTestStructure;

  
}
