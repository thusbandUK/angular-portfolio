import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NgbAccordionModule, NgbAccordionDirective } from '@ng-bootstrap/ng-bootstrap';
import { PrivacyComponent } from '../privacy/privacy.component';

@Component({
  selector: 'app-privacy-container',
  standalone: true,
  imports: [NgbAccordionModule, PrivacyComponent],
  template: `
  <div ngbAccordion #accordion="ngbAccordion" (shown)="privacyAutoScroll($event)" class="row" id="privacy-container">
	  <div ngbAccordionItem="privacy" col-12 >
		  <!--<h2 ngbAccordionHeader>
			  <button ngbAccordionButton>First panel</button>
		  </h2>-->
		  <div ngbAccordionCollapse>
			  <div ngbAccordionBody>
				  <ng-template>
            <app-privacy
              (toggleSend)="closeButtonToggle($event)"
            ></app-privacy>					
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

  //this is an event listener activated by the ng-bootstrap directives. When the collapsible is shown,
  //the event fires, then the below code scrolls up by the parent offset
  privacyAutoScroll(event: any){
    let element = document.getElementById('privacy-container');
    if (element){
      var scrollOffset = element.offsetTop;

      window.scroll({
        top: scrollOffset,               
        left: 0, 
        behavior: 'smooth'
      })

    }

  }


  //this listens for changes to the input, which are beamed via the app.component (as variable containerId)
  //from the footer component. It's a boolean that toggles between true and false.
  ngOnChanges(changes: SimpleChanges) {
    //throws an error if the compiler reads the code before the component is initialised.
    if (this.accordionComponent){
    this.accordionComponent.toggle("privacy");
    }
  }
  
  closeButtonToggle(event: string){
    //confirms output valid
    if (event === 'privacy'){
    //toggles the privacy collapsible
    this.accordionComponent.toggle("privacy");}
  }

}