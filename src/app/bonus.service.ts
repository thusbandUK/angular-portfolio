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
    }
  ]

  getAllBonusMaterials(): BonusStructure[] {
    return this.bonusList;
  }

  constructor() { }
}
