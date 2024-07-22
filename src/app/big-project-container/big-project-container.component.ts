//import { Component } from '@angular/core';
import { Component, inject } from '@angular/core';
//import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {CommonModule} from '@angular/common';
//import {HousingLocation} from '../housinglocation';
import { BigProjectStructure } from '../bigProjectStructure';
import { BigProjectComponent } from '../big-project/big-project.component';
//import { NgFor } from '@angular/common';
import {NgFor} from '@angular/common';
//import {HousingService} from '../housing.service';
import { BigProjectService } from '../bigProject.service';

@Component({
  selector: 'app-big-project-container',
  standalone: true,
  imports: [NgFor, CommonModule, BigProjectComponent],
  template: `    
    <app-big-project
      *ngFor="let bigProject of bigProjectList"
        [bigProject]="bigProject"
    ></app-big-project>    
  `,
  styleUrl: './big-project-container.component.css'
})
export class BigProjectContainerComponent {
  bigProjectService: BigProjectService = inject(BigProjectService);
  //housingService: HousingService = inject(HousingService);
  constructor() {
    //this.housingLocationList = this.housingService.getAllHousingLocations();
    this.bigProjectList = this.bigProjectService.getAllBigProjects();
  }
  
  //housingLocationList: HousingLocation[] = [];
  bigProjectList: BigProjectStructure[] = [];

}
