import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(
        'https://angular-complete-guide-ap-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    // //el operador take funciona para cuando quieres tomar una cantidad finita de valores del observable
    // //Luego de cumplirse eso, se desuscribe automaticamente

    // //El otro operador exhaustMap, espera a que el primer observable termine de completarse y la respuesta del mismo
    // //se toma para llamar un segundo observable
    // return this.authService.user.pipe(
    //   //Tomo el primer valor y termino
    //   take(1),
    //   //El valor del primer observable osea los datos de sesion de la persona, los tiene en el callback del exhaustmap
    //   //este callback se utiliza para anexar el token al request del observable que retorna
    //   exhaustMap((user) => {
    //     return this.http.get<Recipe[]>(
    //       'https://angular-complete-guide-ap-default-rtdb.firebaseio.com/recipes.json',
    //       {
    //         params: new HttpParams().set('auth', user.token),
    //       }
    //     );
    //   }),
    //   map((recipes) => {
    //     return recipes.map((recipe) => {
    //       return {
    //         ...recipe,
    //         ingredients: recipe.ingredients ? recipe.ingredients : [],
    //       };
    //     });
    //   }),
    //   tap((recipes: Recipe[]) => {
    //     this.recipeService.setRecipes(recipes);
    //   })
    // );

    return this.http
      .get<Recipe[]>(
        'https://angular-complete-guide-ap-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
