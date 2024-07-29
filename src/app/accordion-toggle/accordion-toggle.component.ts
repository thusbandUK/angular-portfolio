import { Component, output } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ToggleChildComponent } from '../toggle-child/toggle-child.component';

@Component({
  selector: 'app-accordion-toggle',
  standalone: true,
  imports: [NgbAccordionModule, ToggleChildComponent],
  inputs: [],
  template: `
  <div ngbAccordion #accordion="ngbAccordion">
	<div ngbAccordionItem="first">
		<!--<h2 ngbAccordionHeader>
			<button ngbAccordionButton>First panel</button>
		</h2>-->
		<div ngbAccordionCollapse>
			<div ngbAccordionBody>
				<ng-template>
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
					officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
					moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
					keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
					butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
					haven't heard of them accusamus labore sustainable VHS.
				</ng-template>
			</div>
		</div>
	</div>
	<div ngbAccordionItem="second">
		<h2 ngbAccordionHeader>
			<button ngbAccordionButton>Second panel</button>
		</h2>
		<div ngbAccordionCollapse>
			<div ngbAccordionBody>
				<ng-template>
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
					officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
					moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
					keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
					butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
					haven't heard of them accusamus labore sustainable VHS.
				</ng-template>
			</div>
		</div>
	</div>
</div>

<hr />
<app-toggle-child
(toggleClick)="accordion.toggle($event)"

></app-toggle-child>

  `,
  styleUrl: './accordion-toggle.component.css'
})
export class AccordionToggleComponent {

	showNewName(input: string){
		
		console.log(input);
		
	}
  
  constructor(private customAccordion: NgbAccordionModule){
	
    //console.log(accordion);
	//console.log(ToggleChildComponent);
    
  }

}
