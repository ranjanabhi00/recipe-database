import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ReciepesComponent } from "./reciepes/reciepes.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeViewComponent } from "./recipe-view/recipe-view.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {  HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { CommonModule } from "@angular/common";
import { RecipeCreateComponent } from "./recipe-create/recipe-create.component";

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      CommonModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    declarations: [
        AppComponent,
        ReciepesComponent,
        RecipeEditComponent,
        RecipeViewComponent,
        RecipeCreateComponent
      ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }