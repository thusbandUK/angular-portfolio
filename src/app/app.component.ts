import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, FooterComponent],
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
      <app-footer></app-footer>
    </footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
