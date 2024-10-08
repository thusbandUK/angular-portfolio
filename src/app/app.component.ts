import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BigProjectContainerComponent } from './big-project-container/big-project-container.component';
import { ContactComponent } from './contact/contact.component';
import { BonusMaterialContainerComponent } from './bonus-material-container/bonus-material-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrivacyContainerComponent } from './privacy-container/privacy-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbModule, RouterOutlet, NavbarComponent, FooterComponent, MainTitleComponent, AboutMeComponent, BigProjectContainerComponent, ContactComponent, BonusMaterialContainerComponent, PrivacyContainerComponent],
  template: `
    <header>
      <app-navbar></app-navbar>
    </header>    
    <main>
      <section id="main-title">
        <app-main-title></app-main-title>
      </section>
      <section id="about-me">
        <app-about-me></app-about-me>
      </section>
      <section id="projects">
        <app-big-project-container></app-big-project-container>        
      </section>
      <section id="bonus-material">
        <app-bonus-material-container></app-bonus-material-container>
      </section>      
      <section id="get-in-touch">
        <app-contact></app-contact>
      </section>      
    </main>
    <app-privacy-container
      [toggleStatus]="toggleStatus"
    ></app-privacy-container>
    <footer>
      <app-footer
        (privacyToggleSend)="send($event)"
      ></app-footer>
    </footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'T Husband';
    
  //assigns variable toggleStatus, it starts in the opposite case to the corresponding variable initiated in the footer
  //component, in order that the first event is detected as a change by the privacy-container.component
  toggleStatus: boolean = true;
  //sends toggleStatus for access in privacy-container.component
  send(toggleStatus: boolean){ 
    
    this.toggleStatus = toggleStatus; 
    
  } 
  
}
