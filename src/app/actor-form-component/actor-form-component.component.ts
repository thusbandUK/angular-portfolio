import { Component, Input } from '@angular/core';
import { Actor } from '../actor';
//import { NgModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
//import { NgModel } from '@angular/forms';
//import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RobotImageComponent } from '../robot-image/robot-image.component';

const myActress = new Actor(42, 'Marilyn Monroe', 'Singing');
    console.log('My actress is called ' + myActress.name); // "My actress is called Marilyn"

@Component({
  selector: 'app-actor-form-component',
  standalone: true,
  imports: [NgForOf, FormsModule, RobotImageComponent],
  template: `<p class='hello'>Hello!</p>
  <section>
      <form>
        <input #input type="text" placeholder="Filter by city" />
        <button class="primary" type="button" (click)="send(input.value)">Search</button>
      </form>
      <!--<img [src]="this.imageUrl"/>-->
      <app-robot-image
      [robotSearchString3]="robotSearchString3"
      ></app-robot-image>
    </section>
    <!--
  <form #actorForm="ngForm">
  <input type="text" class="form-control" id="name"
           required
           [(ngModel)]="model.name" name="name">
    TODO: remove this: {{ model.name}}-->
  `,
  styleUrl: './actor-form-component.component.css'
})
export class ActorFormComponentComponent {
  

  robotSearchString3 = "";
  submitFormValue(searchString: string){
    console.log('submitFormValue triggered');
  }

  send(searchString: string){
    console.log(this.robotSearchString3)
    console.log('send function triggered')
    this.robotSearchString3 = searchString;
    console.log(this.robotSearchString3);
    
  } 

 
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  
}
