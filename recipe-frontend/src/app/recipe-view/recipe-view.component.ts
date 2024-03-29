import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrl: './recipe-view.component.css'
})
export class RecipeViewComponent implements OnInit{

  constructor(private httpClient:HttpClient,private route:ActivatedRoute){}
  loading=false;
  imagePlaceholder='https://st2.depositphotos.com/3889193/7173/i/450/depositphotos_71739083-stock-photo-healthy-vegetarian-home-made-food.jpg'

  recipe:Recipe|null=null

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')
    const api=`http://localhost:3000/recipe/${id}`
    this.loading=true
    this.httpClient.get<Recipe>(api).subscribe((data)=>{
      this.recipe=data;
      this.loading=false
    })
  }

}
