import { Component, output } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toggle-child',
  standalone: true,
  imports: [NgbAccordionModule],
  //inputs: ["accordion"],
  template: `
  
  <div ngbAccordion #accordion="ngbAccordion"></div>
  <button class="btn btn-sm btn-outline-primary me-2" (click)="toggleCollapse('first')">Toggle first</button>
<button class="btn btn-sm btn-outline-primary me-2" (click)="toggleCollapse('second')">Toggle second</button>
<button class="btn btn-sm btn-outline-primary me-2" (click)="accordion.expandAll()">Expand all</button>
<button class="btn btn-sm btn-outline-primary me-2" (click)="accordion.collapseAll()">Collapse all</button>`,
  styleUrl: './toggle-child.component.css'
})
export class ToggleChildComponent {

  toggleClick = output<string>()    // OutputEmitterRef<string>

  toggleCollapse(id: string){
    this.toggleClick.emit(id);    
  }  

}
