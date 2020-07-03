import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe Number 1',
      'This is a simply a test',
      'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_1280.jpg',
      [
        new Ingredient('Flour', 4),
        new Ingredient('Cheese', 1)
      ]
    ),
    new Recipe(
      'Test Recipe Number 2',
      'This is a simply a test',
      'https://cdn.pixabay.com/photo/2016/02/02/15/33/dishes-1175493_1280.jpg',
      [
        new Ingredient('Eggs', 12),
        new Ingredient('Jam', 3)
      ]
    ),
    new Recipe(
      'Test Recipe Number 3',
      'This is a simply a test',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
      [
        new Ingredient('Rice', 2),
        new Ingredient('Mushrooms', 20)
      ]
    ),
    new Recipe(
      'Test Recipe Number 4',
      'This is a simply a test',
      'https://cdn.pixabay.com/photo/2017/12/23/15/54/food-3035432_1280.jpg',
      [
        new Ingredient('Salt', 1),
        new Ingredient('Peanut', 10)
      ]
    )
  ];

  constructor(private shopListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shopListService.addIngredients(ingredients);
  }
}
