import { Component } from '@angular/core';
import { Residence } from 'src/app/app.component';
@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})



export class AppartementComponent {
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
