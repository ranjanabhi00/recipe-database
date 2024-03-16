import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { Ingredient } from './entities/ingredient.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Recipe,Ingredient])],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
