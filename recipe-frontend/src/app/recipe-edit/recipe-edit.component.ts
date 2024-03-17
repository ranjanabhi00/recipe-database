import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, UrlTree,} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  constructor( private route:ActivatedRoute,
               private router:Router,
               private httpClient:HttpClient){}
               
  ingredient: FormGroup=new FormGroup({});
  recipe:FormGroup=new FormGroup({});
  recipeData:Recipe|null=null
  id:string|null=null

  ingredients:Ingredient[]=[];

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');
    this.fetchRecipe(this.id)
    this.ingredient = new FormGroup({
      name: new FormControl(''),
      quantity: new FormControl('')
    });
    this.recipe = new FormGroup({
      name: new FormControl(this.recipeData?.name || ''),
      description: new FormControl(this.recipeData?.description || ''),
      calories: new FormControl(this.recipeData?.calories || ''),
      imageUrl: new FormControl(this.recipeData?.imageUrl || '')
    });
    
  }

  fetchRecipe(id:string|null){
    const api=`http://localhost:3000/recipe/${id}`
    this.httpClient.get<Recipe>(api).subscribe((data)=>this.recipeData=data)
  }

  addIngredient(){
    this.ingredients=[...this.ingredients,this.ingredient.value]
    this.ingredient.reset()
  }
  editRecipe(){
    const api=`http://localhost:3000/recipe/${this.id}`
    const recipe={
      ...this.recipe.value,
      ingredients:this.ingredient.value
    }
    this.httpClient.patch(api,recipe).subscribe((data)=>console.log(data))
    this.recipe.reset()
    this.router.navigateByUrl(`/recipe/${this.id}`)
  }
}
