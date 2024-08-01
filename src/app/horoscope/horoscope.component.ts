import { Component } from '@angular/core';
import { printText }from '../../assets/scripts/scrambling-text';

@Component({
  selector: 'app-horoscope',
  standalone: true,
  imports: [],
  host: {
    'style': 'display: flex;'
  },
  template: `
  <div class="collapsible-white-inner"  id="collapsible-horoscope-container">
    <h3>Click the planets to view your horoscope</h3>
    <div id="horoscope-container">
      <div id="horoscope-text-holder">
        <p id="text"></p>
      </div>
      <img id="planets-image" alt="cartoon planets" src="assets/horoscope/cartoon planets.jpg" (click)="onClick();">
    </div>
  </div>
      `,
  styleUrl: './horoscope.component.css'
})
export class HoroscopeComponent {

  onClick(): any {
    printText();
  }
  /*printText(){
    console.log('printText got clicked');
  }*/

}
