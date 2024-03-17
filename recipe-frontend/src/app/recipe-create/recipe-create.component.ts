import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrl: './recipe-create.component.css'
})
export class RecipeCreateComponent implements OnInit {
  constructor(private httpClient:HttpClient,private router:Router){}

  ingredient: FormGroup=new FormGroup({});
  recipe:FormGroup=new FormGroup({});

  ingredients:Ingredient[]=[];
   api='http://localhost:3000/recipe'

  ngOnInit() {
    this.ingredient = new FormGroup({
      name: new FormControl(''),
      quantity: new FormControl('')
    });
    this.recipe = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      calories: new FormControl(''),
      imageUrl: new FormControl('')
    });
  }

  addIngredient(){
    this.ingredients=[...this.ingredients,this.ingredient.value]
    this.ingredient.reset()
  }
  createRecipe(){
      const recipe={
        ...this.recipe.value,
        ingredients:this.ingredient.value
      }
      this.httpClient.post(this.api,recipe).subscribe((data)=>console.log(data))
      this.recipe.reset()
      this.router.navigateByUrl("/recipes")
  }


}
