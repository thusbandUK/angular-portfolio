import { Component, Input, OnChanges, SimpleChanges, ViewChild, OnInit } from '@angular/core';
import { NgbAccordionModule, NgbAccordionDirective } from '@ng-bootstrap/ng-bootstrap';
import { PrivacyComponent } from '../privacy/privacy.component';

@Component({
  selector: 'app-privacy-container',
  standalone: true,
  imports: [NgbAccordionModule, PrivacyComponent],
  template: `
  <div ngbAccordion #accordion="ngbAccordion"  class="row" id="privacy statement">
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
export class PrivacyContainerComponent implements OnChanges, OnInit {
  //This enables the value of containerId in the app.component to be accessible in this child component
  @Input() toggleStatus!:boolean;

  //this enables the NgbAccordion methods to be activated from the class
  @ViewChild('accordion') accordionComponent!: NgbAccordionDirective;

  ngOnInit(): void {
    if (this.accordionComponent){
      console.log(this.accordionComponent.toggle);
      }
      console.log(this.toggleStatus)
    
  }
  //this listens for changes to the input, which are beamed via the app.component (as variable containerId)
  //from the footer component. It's a boolean that toggles between true and false.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges triggered')
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

/*

if you add this to the accordionItem it means the elements are still in the dom, even though they're not shown,
when the section is collapsed
[destroyOnHide]="false"
*/
