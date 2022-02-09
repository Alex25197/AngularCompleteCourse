import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chorizo & mozzarella gnocchi bake',
      'Test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?webp=true&quality=90&resize=440%2C400',
      [new Ingredient('Meat', 1), new Ingredient('French Frieds', 20)]
    ),
    new Recipe(
      'Thai fried prawn & pineapple rice',
      'Test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/thai-aea8468.jpg?webp=true&quality=90&resize=440%2C400',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 2)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    //Se pone slice para que lo que retorne, sea una copia de la propiedad guardada en el servicio, no el mismo arreglo
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice())
  }
}
