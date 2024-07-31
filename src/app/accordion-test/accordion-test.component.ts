import { Component, output } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordion-test',
  standalone: true,
  imports: [NgbAccordionModule],
  template: `
<div ngbAccordion id="one" (shown)="onPanelShown($event)">
	<div ngbAccordionItem [collapsed]="false" id="two"  >
		<h2 ngbAccordionHeader id="three">
			<button ngbAccordionButton>Simple</button>
		</h2>
		<div ngbAccordionCollapse id="four">
			<div ngbAccordionBody id="five">
				<ng-template id="six">
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
	<div ngbAccordionItem>
		<h2 ngbAccordionHeader>
			<button ngbAccordionButton>
				<span>&#9733; <b>Fancy</b> title &#9733;</span>
			</button>
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
	<div ngbAccordionItem [disabled]="true">
		<h2 ngbAccordionHeader>
			<button ngbAccordionButton>Disabled</button>
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



  `,
  styleUrl: './accordion-test.component.css'
})
export class AccordionTestComponent {

//shown = output<string>()
onPanelShown(id: string){
  console.log(id);
  //this.shown.emit(id);
}
/*
//this.shown.emit(id);

/*
onNameChange = output<string>()    // OutputEmitterRef<string>
  setNewName(newName: string) {
    this.onNameChange.emit(newName);
  }

  <my-comp (onNameChange)="showNewName($event)" />

  onPanelShown(id: string){
    console.log(id);
  }

  toggleSend = output<string>()    // OutputEmitterRef<string>

  toggleClick(id: string){
    //idMarker helps to create a more readable #id tag for css
    let idMarker = 'collapsibleContent';
    //the numerical id for each section of bonus material is passed in string form to act as event emitter
    //this is then combined with the idMarker to synch with the readable id tags
    //console.log(idMarker+id)
    this.toggleSend.emit(idMarker+id);    
  }  
*/
}

/*

  <div ngbAccordion>
  <ngb-accordion (shown)="onPanelShown($event)" (hidden)="onPanelHidden($event)">
  <ngb-panel id="one" (shown)="onPanelShown('one')" (hidden)="onPanelHidden('one')">
    Hello
  </ngb-panel>
</ngb-accordion>
</div>

*/