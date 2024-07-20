import { Component, inject } from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
import { BigProjectStructure } from '../bigProjectStructure';
import { BigProjectComponent } from '../big-project/big-project.component';
//import { NgFor } from '@angular/common';
import {NgFor} from '@angular/common';
import {HousingService} from '../housing.service';
import { BigProjectService } from '../bigProject.service';

/*
this was in imports CommonModule. v frustrating, basically their app shows the commonmodule being imported (see commented out
line above) but including common module in the imports crashes the app 
*/

/*
inre: template 2nd section
When adding a property binding to a component tag, we use the [attribute] = "value" syntax to notify Angular that the assigned 
value should be treated as a property from the component class and not a string value.
*/

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, NgFor, CommonModule, BigProjectComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <app-big-project
      *ngFor="let bigProject of bigProjectList"
        [bigProject]="bigProject"
    ></app-big-project>
    <section class="results">    
    <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"        
      ></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  bigProjectService: BigProjectService = inject(BigProjectService);
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.bigProjectList = this.bigProjectService.getAllBigProjects();
  }
  
  housingLocationList: HousingLocation[] = [];
  bigProjectList: BigProjectStructure[] = [];
}
