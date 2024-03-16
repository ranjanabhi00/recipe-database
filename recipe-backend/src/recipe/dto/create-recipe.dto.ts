import { Ingredient } from "../entities/ingredient.entity"

export class CreateRecipeDto {
    name?:string
    description?:string
    imageUrl?:string
    calories?:string
    ingredients?:Ingredient[]
}
