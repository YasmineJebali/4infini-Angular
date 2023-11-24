import { Component } from '@angular/core';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  id!:number;
  name!:string;
  address!: string;
  image!:string;
  }
