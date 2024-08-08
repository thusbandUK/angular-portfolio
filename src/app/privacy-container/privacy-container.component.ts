import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NgbAccordionModule, NgbAccordionDirective } from '@ng-bootstrap/ng-bootstrap';
import { PrivacyComponent } from '../privacy/privacy.component';

@Component({
  selector: 'app-privacy-container',
  standalone: true,
  imports: [NgbAccordionModule, PrivacyComponent],
  template: `
  <div ngbAccordion #accordion="ngbAccordion">
	  <div ngbAccordionItem="privacy">
		  <!--<h2 ngbAccordionHeader>
			  <button ngbAccordionButton>First panel</button>
		  </h2>-->
		  <div ngbAccordionCollapse>
			  <div ngbAccordionBody>
				  <ng-template>
            <app-privacy></app-privacy>					
				  </ng-template>
			  </div>
		  </div>
	  </div>
  </div>  
  `,
  styleUrl: './privacy-container.component.css'
})
export class PrivacyContainerComponent implements OnChanges {
  //This enables the value of containerId in the app.component to be accessible in this child component
  @Input() toggleStatus!:boolean;

  //this enables the NgbAccordion methods to be activated from the class
  @ViewChild('accordion') accordionComponent!: NgbAccordionDirective;

  //this listens for changes to the input, which are beamed via the app.component (as variable containerId)
  //from the footer component. It's a boolean that toggles between true and false.
  ngOnChanges(changes: SimpleChanges) {
    //throws an error if the compiler reads the code before the component is initialised.
    if (this.accordionComponent){
    this.accordionComponent.toggle("privacy");
    }
  }  

}
