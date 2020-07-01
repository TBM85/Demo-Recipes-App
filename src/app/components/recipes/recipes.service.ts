import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe Number 1',
      'This is a simply a test',
      'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_1280.jpg'
    ),
    new Recipe(
      'Test Recipe Number 2',
      'This is a simply a test',
      'https://cdn.pixabay.com/photo/2016/02/02/15/33/dishes-1175493_1280.jpg'
    ),
    new Recipe(
      'Test Recipe Number 3',
      'This is a simply a test',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg'
    ),
    new Recipe(
      'Test Recipe Number 4',
      'This is a simply a test',
      'https://cdn.pixabay.com/photo/2017/12/23/15/54/food-3035432_1280.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
