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
        image: './assets/screengrabs of sites and snippets/cowfolk.png',
        imageAlt: 'front page of Easton Cowfolk website',
        title: 'Easton Cowfolk',
        description: 'Newly restyled website for the Easton Cowfolk website. Created by development of a Wordpress child theme, according to provided Figma designs.',
        skills: ['WORDPRESS', 'WP-ENV', 'DOCKER'],
        githubUrl: '',
        siteUrl: 'https://dev.eastoncowfolk.org.uk/'   
      },  
      {
        id: 2,
        image: './assets/screengrabs of sites and snippets/Now Chemistry.png',
        imageAlt: 'front page of Now Chemistry website features pink amethyst crystals',
        title: 'Now Chemistry',
        description: 'This is a living prototype for my chemistry app. Users can click test tubes to simulate the changes they would witness in the laboratory, such as colour changes or bubbles of gas. Next they can read through explanatory text, answer questions and then receive feedback. The app was created using React-Redux with Bootstrap for styling. The code features components which automatically render content from data stored in javascript objects.',
        skills: ['JAVASCRIPT', 'REACT-REDUX', 'BOOTSTRAP'],
        githubUrl: 'https://github.com/thusbandUK/transition-redux',
        siteUrl: 'https://nowchemistry.com/'   
      },
      {
        id: 3,
        image: './assets/screengrabs of sites and snippets/woodandsteele.png',
        imageAlt: 'front page of Wood and Steele website features examples of restored vintage furniture',
        title: 'Wood and Steele',
        description: 'Active website for local vintage furniture restoration company Wood and Steele. Designed via Wordpress using block editing.',
        skills: ['WORDPRESS', 'BLOCK EDITOR', 'HTML'],
        githubUrl: '',
        siteUrl: 'https://woodandsteele.co.uk/'   
      },
      
      {
        id: 4,
        image: './assets/screengrabs of sites and snippets/sarahlavelle3.png',
        imageAlt: 'front page of Sarah Lavelle website features cartoon sea creatures',
        title: 'Sarah Lavelle',
        description: 'A responsive website advertising the debut publication of a children\’s book author. Users can read about the author and her work and download educational resources. The website is connected with Google Analytics, configured to show the volume of traffic which clicks through the link to purchase the book. A cookie consent banner is also configured to disable Analytics at the user’s request.',
        skills: ['JAVASCRIPT', 'HTML', 'CSS', 'BOOTSTRAP'],
        githubUrl: 'https://github.com/thusbandUK/sarahlavelle',
        siteUrl: 'https://www.sarahlavelle.co.uk/'   
      },
      {
        id: 5,
        image: './assets/screengrabs of sites and snippets/raven-frames.png',
        imageAlt: 'front page of Raven Frames website features example picture frames',
        title: 'Raven Frames',
        description: 'A responsive website showcasing the work of a Bristol-based framing company. The commissioner has a strong visual eye and we worked together to ensure the design fully reflected their vision. Easily navigable via an offcanvas navbar, the site is fully optimised for desktops, tablets and mobiles.',
        skills: ['JAVASCRIPT', 'HTML', 'CSS', 'BOOTSTRAP'],
        githubUrl: 'https://github.com/thusbandUK/raven-frames',
        siteUrl: 'https://ravenframes.co.uk/'   
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
