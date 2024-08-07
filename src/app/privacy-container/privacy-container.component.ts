import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
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
export class PrivacyContainerComponent {
/*
  privacyToggleSend.subscribe(id => {
    console.log(id);
  })*/

}