import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reciepes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './reciepes.component.html',
  styleUrl: './reciepes.component.css'
})
export class ReciepesComponent {

  recipes:Recipe[]=[
     {
      id:'1',
      name:'Samosa',
      description:"It is a fast food",
      ingredients:[{name:'wheat flour',quantity:"230"}],
      calories:"234"

     },
     {
      id:'2',
      name:'Samosa',
      description:"It is a fast food",
      ingredients:[{name:'wheat flour',quantity:"230"}],
      calories:"234"

     },
     {
      id:'3',
      name:'Samosa',
      description:"It is a fast food",
      ingredients:[{name:'wheat flour',quantity:"230"}],
      calories:"234"

     },
  ]

}
