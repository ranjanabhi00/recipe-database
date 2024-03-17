import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { Repository } from 'typeorm';
import { Ingredient } from './entities/ingredient.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}
  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe | Error> {
    try {
      const { name, description, calories, imageUrl } = createRecipeDto;
      let ingredientsPromises = null;
      if (!!createRecipeDto.ingredients?.length) {
        ingredientsPromises = createRecipeDto.ingredients.map(
          (ingredient: Ingredient) => {
            return this.ingredientRepository.save(ingredient);
          },
        );
        await Promise.all(ingredientsPromises);
      }
      const recipe = new Recipe();
      recipe.name = name;
      recipe.description = description;
      recipe.calories = calories;
      recipe.imageUrl = imageUrl;
      if (!!createRecipeDto.ingredients?.length)
        recipe.ingredients = createRecipeDto.ingredients;
      let savedRecipe = await this.recipeRepository.save(recipe);
      return Object.assign(savedRecipe);
    } catch (err) {
      console.log(err);
      return new Error(err);
    }
  }

  async findAll(): Promise<Recipe[] | Error> {
    try {
      const recipes = await this.recipeRepository.find();
      return recipes;
    } catch (err) {
      console.log(err);
      return new Error(err);
    }
  }

  async findOne(id: number): Promise<Recipe | Error> {
    try {
      const recipe = await this.recipeRepository.find({
        where: { id: id },
        relations: { ingredients: true },
      });
      if (!!recipe?.length) return recipe[0];
      return new Error(`Recipe with id ${id} does not exist`);
    } catch (err) {
      console.log(err);
      return new Error(err);
    }
  }

  async update(
    id: number,
    updateRecipeDto: CreateRecipeDto,
  ): Promise<Recipe | Error> {
    try {
      const recipes = await this.recipeRepository.find({ where: { id: id } });
      if (!recipes || !recipes?.length)
        return new Error(`Recipe with id ${id} does not exist`);
      const { name, description, calories, imageUrl } = updateRecipeDto;
     
      const recipe = recipes[0];
      if (!!name) recipe.name = name;
      if (!!description) recipe.description = description;
      if (!!calories) recipe.calories = calories;
      if (!!imageUrl) recipe.imageUrl = imageUrl;
      if (!!updateRecipeDto.ingredients?.length){
       let  ingredientsPromises = updateRecipeDto.ingredients.map(
          (ingredient: Ingredient) => {
            return this.ingredientRepository.save(ingredient);
          },
        );
        await Promise.all(ingredientsPromises);
        recipe.ingredients = updateRecipeDto.ingredients;
      }
      let savedRecipe = await this.recipeRepository.save(recipe);
      return Object.assign(savedRecipe);
    } catch (err) {
      console.log(err);
      return new Error(err);
    }
  }
}
