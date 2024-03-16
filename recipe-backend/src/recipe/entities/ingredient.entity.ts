import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./recipe.entity";

@Entity('ingredient')
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    quantity: string;

    @ManyToOne(()=>Recipe,(recipe)=>recipe.ingredients)
    recipe:Recipe

}