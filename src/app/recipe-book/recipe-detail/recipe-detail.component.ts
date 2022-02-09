import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  currentRecipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Me suscribo a los parametros de la ruta activa y dependiendo del id, cambio currentRecipe
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']; //parseo a number
      this.currentRecipe = this.recipeService.getRecipe(this.id);
    });
  }

  editRecipe(){
    //Manera de utilizar router navigate ya que solo concatenariamos la ruta actual con lo que le enviamos
    this.router.navigate([`edit`], {relativeTo: this.route});

    //Manera alternativa
    //Subes un nivel con el ../ hacia recipes, concatenas el id y el edit, quedaria asi /recipes/id/edit
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.currentRecipe.ingredients);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }
}
