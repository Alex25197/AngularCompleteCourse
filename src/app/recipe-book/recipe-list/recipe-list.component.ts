import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipeItem: Recipe){
this.recipeWasSelected.emit(recipeItem);
  }
}
