import { Component } from '@angular/core';

@Component({
  selector: 'app-horoscope',
  standalone: true,
  imports: [],
  template: `
    <h3>Click the planets to view your horoscope</h3>
      <div id="horoscope-container">
        <div id="horoscope-text-holder">
          <p id="text"></p>
        </div>
        <img id="planets-image" alt="cartoon planets" src="assets/horoscope/cartoon planets.jpg" (click)="printText();">
      </div>`,
  styleUrl: './horoscope.component.css'
})
export class HoroscopeComponent {

  printText(){
    console.log('printText got clicked');
  }

}
