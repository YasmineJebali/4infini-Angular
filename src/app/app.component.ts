import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projet4';
}
export class Residence {
  id!:number;
  name!:string;
  address!: string;
  image!:string;
  }
 export class Apartment {
    id!: number;
    appartNum!: number;
    floorNum!: number;
    surface!: number;
    terrace!: string;
    surfaceTerrace!: number;
    category!: string;
    description!: string;
    residence!: Residence;
    }
