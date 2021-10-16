
import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Chorizo & mozzarella gnocchi bake',
          'Test',
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?webp=true&quality=90&resize=440%2C400'
        ),
        new Recipe(
          'Thai fried prawn & pineapple rice',
          'Test',
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/thai-aea8468.jpg?webp=true&quality=90&resize=440%2C400'
        ),
      ];

      getRecipes(){
          //Se pone slice para que lo que retorne, sea una copia de la propiedad guardada en el servicio, no el mismo arreglo
          return this.recipes.slice();
      }
}