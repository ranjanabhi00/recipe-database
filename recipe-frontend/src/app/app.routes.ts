import { Routes } from '@angular/router';
import { ReciepesComponent } from './reciepes/reciepes.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

export const routes: Routes = [
    {   path: 'recipes',
        component:ReciepesComponent
    },
    {
        path:'',
        redirectTo: 'recipes',
        pathMatch: 'full' ,
    },
    {
        path:'recipe/create',
        component:RecipeCreateComponent
    },
    {
        path:'recipe/edit/:id',
        component:RecipeEditComponent
    },
    {
        path:'recipe/:id',
        component:RecipeViewComponent
    },
    
];
