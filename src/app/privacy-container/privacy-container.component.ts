import { Component, Input, OnInit, DoCheck, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
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

  <button class="nav-item list-group-item mx-2" id="privacy-collapser" (click)="accordion.toggle('privacy')" role="button">Privacy</button>
  `,
  styleUrl: './privacy-container.component.css'
})
export class PrivacyContainerComponent implements OnChanges {
  //This enables the value of containerId in the app.component to be accessible in this child component
  @Input() containerId!:string;

  //this enables the NgbAccordion methods to be activated from the class
  @ViewChild('accordion') accordionComponent!: NgbAccordionDirective;

  //this listens for changes to the input, which are beamed via the app.component (as variable containerId)
  //from the footer component
  ngOnChanges(changes: SimpleChanges) {    
    this.accordionComponent.toggle(this.containerId);
  }

}
