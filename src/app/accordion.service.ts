import { Injectable } from '@angular/core';
import { AccordionTestStructure } from './accordionTestStructure';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  accordionList: AccordionTestStructure[] = [
    {id: "first"},
    {id: "second"},
    {id: "third"}
  ]

  getAllAccordionId(): AccordionTestStructure[] {
    return this.accordionList;
  }

  constructor() { }
}
