import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BigProjectContainerComponent } from './big-project-container/big-project-container.component';
import { ContactComponent } from './contact/contact.component';
import { BonusMaterialContainerComponent } from './bonus-material-container/bonus-material-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import * as sayHello from '../assets/scripts/testScript';
import { AccordionTestComponent } from './accordion-test/accordion-test.component';
import { PrivacyContainerComponent } from './privacy-container/privacy-container.component';


//declare function sayHello(): any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbModule, RouterOutlet, NavbarComponent, FooterComponent, MainTitleComponent, AboutMeComponent, BigProjectContainerComponent, ContactComponent, BonusMaterialContainerComponent, AccordionTestComponent, PrivacyContainerComponent],
  template: `
    <header>
      <app-navbar
      (sendSelectedItem)="logResult($event)"
      (navHide)="setNavHide"
      ></app-navbar>
    </header>
    <!--<app-accordion-test></app-accordion-test>-->
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
    <app-privacy-container></app-privacy-container>
    <footer>
      <app-footer></app-footer>
    </footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements  AfterViewInit  {
  title = 'T Husband';
  
  //@ViewChild(NavbarComponent) toggle: NavbarComponent | undefined;
  @ViewChild('navbar') navbarDiv: ElementRef<HTMLDivElement> | undefined ;
  @ViewChild(AboutMeComponent) aboutMePosition!: AboutMeComponent


  setNavHide: boolean = false;
  logResult(event: any){
    console.log('logResult triggered')
    console.log('app received output of', event);
    console.log(this.aboutMePosition.aboutMe.nativeElement.getBoundingClientRect().y);
    this.setNavHide = true;
  }

 ngAfterViewInit(){
  console.log(this.navbarDiv);
 }
  
}
