import { Component, inject } from '@angular/core';
import { BonusMaterialComponent } from '../bonus-material/bonus-material.component';
import { BonusService } from '../bonus.service';
import { BonusStructure } from '../bonusStructure';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bonus-material-container',
  standalone: true,
  imports: [BonusMaterialComponent, NgFor],
  template: `
    <!--Section title-->
    <div class="text-start mt-5 mb-5 mx-auto">
      <div class="main-title-inner">
        <h2>Bonus material</h2>
      </div>
    </div> <!--section title ends-->
    <app-bonus-material    
        *ngFor="let bonusMaterial of bonusList"
        [bonusMaterial]="bonusMaterial"    
    ></app-bonus-material>
  `,
  styleUrl: './bonus-material-container.component.css'
})
export class BonusMaterialContainerComponent {

  printText(){
    console.log('print text function works!');
  }

  bonusService: BonusService = inject(BonusService);
  
  constructor() {    
    this.bonusList = this.bonusService.getAllBonusMaterials();
  }  
  
  bonusList: BonusStructure[] = [];

}
