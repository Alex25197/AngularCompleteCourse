import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesResolverService } from "./recipes-resolver.service";

const routes: Routes = [
    {
        path: 'recipes',
        component: RecipeBookComponent,
        canActivate: [AuthGuard],
        children: [
          //El orden en que se declaran las rutas es muy importante ya que primero debe cargar las que estan hardcoded(new) y luego las
          //de parametros dinamicos
          { path: '', component: RecipeStartComponent },
          { path: 'new', component: RecipeEditComponent },
          {
            path: ':id',
            component: RecipeDetailComponent,
            resolve: [RecipesResolverService],
          },
          {
            path: ':id/edit',
            component: RecipeEditComponent,
            resolve: [RecipesResolverService],
          },
        ],
      }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class RecipeBookRoutingModule {
    
}