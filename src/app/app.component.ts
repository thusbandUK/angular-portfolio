import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { AboutMeComponent } from './about-me/about-me.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, FooterComponent, MainTitleComponent, AboutMeComponent],
  template: `
    <header>
      <app-navbar></app-navbar>
    </header>
    <main>
      <section>
        <app-main-title></app-main-title>
      </section>
      <section>
        <app-about-me></app-about-me>
      </section>
      <section id="projects">
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
