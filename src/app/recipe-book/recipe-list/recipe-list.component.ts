import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'Simple Test',
      'https://cdn.pixabay.com/photo/2018/04/16/15/56/food-3325036_960_720.jpg'
    ),
    new Recipe(
      'Test recipe',
      'Simple Test',
      'https://cdn.pixabay.com/photo/2018/04/16/15/56/food-3325036_960_720.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
