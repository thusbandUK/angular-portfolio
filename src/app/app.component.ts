import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent],
  template: `
    <header>
      <app-navbar></app-navbar>

    </header>
    <main>      
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
    <footer>
    </footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
