import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  constructor( private route:ActivatedRoute,
               private router:Router){
   
  }
  ingredient: FormGroup=new FormGroup({});
  recipe:FormGroup=new FormGroup({});

  ingredients:Ingredient[]=[];

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
    const heroId = this.route.snapshot.paramMap.get('id');
    console.log(heroId)
  }

  addIngredient(){
    this.ingredients=[...this.ingredients,this.ingredient.value]
    console.log(this.ingredients)
    this.ingredient.reset()
  }
  createRecipe(){
    console.log(this.recipe)
  }
}
