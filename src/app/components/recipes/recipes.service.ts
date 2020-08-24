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
      'Strawberry Cheesecake',
      'Classic strawberry cheesecake with the easiest recipe, perfect for everyday baking',
      'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_1280.jpg',
      [
        new Ingredient('Cream cheese', 1),
        new Ingredient('Biscuits', 12),
        new Ingredient('Punnet of strawberries', 1),
        new Ingredient('Icing sugar', 2),
        new Ingredient('Butter', 1),
        new Ingredient('Vanilla pod', 1)
      ]
    ),
    new Recipe(
      'Tomato Soup',
      'A tasty tomato soup made with natural tomatoes, a quick recipe for any day',
      'https://cdn.pixabay.com/photo/2016/02/02/15/33/dishes-1175493_1280.jpg',
      [
        new Ingredient('Tomatoes', 6),
        new Ingredient('Chicken broth', 3),
        new Ingredient('Onion', 1),
        new Ingredient('Garlic', 3),
        new Ingredient('Basil leaves', 1),
        new Ingredient('Thyme', 1)
      ]
    ),
    new Recipe(
      'Beef with sauteed vegetables',
      'This beef with sauteed vegetables is a quick and easy way to get some veggies in the diet',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
      [
        new Ingredient('Beef', 5),
        new Ingredient('Mushrooms', 20),
        new Ingredient('Peppers', 10),
        new Ingredient('Carrots', 2),
        new Ingredient('Lettuce', 1),
        new Ingredient('Soy Sauce', 1)
      ]
    ),
    new Recipe(
      'Chicken Burger',
      'Delicious and healthy homemade chicken burgers, ideal for the little ones in the house',
      'https://cdn.pixabay.com/photo/2017/12/23/15/54/food-3035432_1280.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Brioche buns', 1),
        new Ingredient('Cherry tomato', 12),
        new Ingredient('Red onion', 1),
        new Ingredient('Paprika', 1),
        new Ingredient('Black pepper', 1),
        new Ingredient('Basil leaves', 2)
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
