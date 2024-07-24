import { Injectable } from '@angular/core';
import { BonusStructure } from './bonusStructure';

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  bonusList: BonusStructure[] = [
    {
      id: 1,
      image: 'assets/card-thumbnails/alternative stylings.png',
      imageAlt: 'a trio of screengrabs of alternate stylings of the Raven Frames landing page',
      heading: 'Alternative Stylings',
      description: 'Demonstrates three different carousels of images suggested for the landing page of the Raven Frames website.',
      componentReference: 'alternativeStylings'
    },
    {
      id: 2,
      image: 'assets/card-thumbnails/scenario wheel.png',
      imageAlt: 'screen grab of concentric circles each containing four different keywords',
      heading: 'Selection wheel',
      description: 'An animated trio of concentric circles which spin in opposite directions to select a random combination of options.',
      componentReference: 'animatedWheels'
    },
    {
      id: 3,
      image: 'assets/card-thumbnails/horoscope.png',
      imageAlt: 'screen grab of a horoscope generator',
      heading: 'Random horoscope generator',
      description: 'Uses javascript to animate the appearance of a random humorous horoscope.',
      componentReference: 'animatedHoroscope'
    }
  ]

  getAllBonusMaterials(): BonusStructure[] {
    return this.bonusList;
  }

  constructor() { }
}
