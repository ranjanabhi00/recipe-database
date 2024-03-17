import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reciepes',
  templateUrl: './reciepes.component.html',
  styleUrl: './reciepes.component.css'
})
export class ReciepesComponent implements OnInit{
  constructor(private httpClient:HttpClient){}
  recipes:Recipe[]=[]
  loading=false;

  ngOnInit(): void {
    const api='http://localhost:3000/recipe'
    this.loading=true
    this.httpClient.get<Recipe[]>(api).subscribe((data)=>{
      this.recipes=data
      this.loading=false
    })
  }

}
