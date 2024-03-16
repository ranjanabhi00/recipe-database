import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ingredient } from "./ingredient.entity";

@Entity('recipe')
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    description: string;

    @Column({nullable:true})
    imageUrl:string;

    @Column()
    calories:string

    @OneToMany(()=>Ingredient,(ingredient)=>ingredient.recipe,{nullable:true})
    ingredients:Ingredient[]
}
