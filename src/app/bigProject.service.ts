import { Injectable } from '@angular/core';
//import {HousingLocation} from './housinglocation';
import { BigProjectStructure } from './bigProjectStructure';

@Injectable({
  providedIn: 'root'
})
export class BigProjectService {

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  bigProjectList: BigProjectStructure[] = [
    {
        id: 1,
        image: './assets/screengrabs of sites and snippets/Now Chemistry.png',
        imageAlt: 'front page of Now Chemistry website features pink amethyst crystals',
        title: 'Now Chemistry',
        description: 'This is a living prototype for my chemistry app. Users can click test tubes to simulate the changes they would witness in the laboratory, such as colour changes or bubbles of gas. Next they can read through explanatory text, answer questions and then receive feedback. The app was created using React-Redux with Bootstrap for styling. The code features components which automatically render content from data stored in javascript objects.',
        skills: ['JAVASCRIPT', 'REACT-REDUX', 'BOOTSTRAP'],
        githubUrl: 'https://github.com/thusbandUK/transition-redux',
        siteUrl: 'https://nowchemistry.com/'   
      }
  ];

  /*getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }*/
  getAllBigProjects(): BigProjectStructure[] {
    return this.bigProjectList;
  }
  /*getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }*/

  constructor() {

    
   }
}
