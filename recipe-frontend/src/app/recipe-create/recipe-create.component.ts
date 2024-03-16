import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-create.component.html',
  styleUrl: './recipe-create.component.css'
})
export class RecipeCreateComponent implements OnInit {

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
