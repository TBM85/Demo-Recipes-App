import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-print-shopping-list',
  templateUrl: './print-shopping-list.component.html'
})
export class PrintShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientChangedSubs: Subscription;

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopListService.getIngredients();
    this.ingredientChangedSubs = this.shopListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.ingredientChangedSubs.unsubscribe();
  }

}
