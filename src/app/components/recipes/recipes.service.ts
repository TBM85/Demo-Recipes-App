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
      // tslint:disable-next-line: max-line-length
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus elit nunc, vitae condimentum orci porta ut. Praesent sagittis convallis felis, ut eleifend neque lacinia nec. Nulla maximus orci ac tellus cursus, vitae molestie libero tincidunt. Donec sed pellentesque est. Integer id lobortis diam. Donec condimentum nulla non eros luctus, quis luctus ipsum faucibus. In hac habitasse platea dictumst. Sed sed ipsum at odio ultrices pulvinar. Nunc convallis ligula non dictum varius. Quisque et lacinia sem. Cras finibus fermentum augue. Etiam sed egestas metus. Donec ac elit a nulla molestie tristique. Vivamus gravida sapien non malesuada finibus. Proin leo est, dapibus quis facilisis ac, porttitor eu mi. \n Curabitur porta ex a tempus tristique. Etiam eget nulla tellus. Sed sodales ligula vel nisi dignissim vestibulum. Ut in quam tellus. Curabitur lacinia sapien ex, sed mollis est tempor sit amet. Etiam vulputate in eros ac condimentum. Vestibulum sit amet molestie orci. Fusce sodales, felis nec molestie volutpat, nunc tortor elementum lacus, quis cursus nisi mi id velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique vestibulum auctor. Ut sed tortor ac orci gravida eleifend. Suspendisse molestie semper ipsum, non posuere nisl ornare id. Nam pretium vel mauris eget dapibus. Aenean congue lacus non urna vehicula mollis. Nunc id nunc ac eros posuere hendrerit.',
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
      // tslint:disable-next-line: max-line-length
      'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vitae convallis mi. Nulla sodales sodales libero, a facilisis eros finibus ac. Nullam et placerat sem, id volutpat metus. Ut velit purus, tincidunt ac odio ac, tempor finibus ipsum. Quisque semper lobortis diam. Aenean faucibus convallis volutpat. In in metus lectus. Maecenas eget iaculis mauris. Praesent eu odio nec purus tincidunt pulvinar eget quis augue. Sed posuere libero leo, et scelerisque sapien euismod ac. Sed posuere tellus ac dolor tincidunt, nec finibus nisl commodo. Aliquam ultrices lorem elit, iaculis accumsan orci pulvinar vitae. \n Mauris libero quam, condimentum in facilisis at, aliquet a risus. Donec sit amet risus odio. Phasellus eget diam lobortis, luctus diam vitae, bibendum est. Aenean vitae orci sed orci dignissim mollis non vel nunc. Nam sodales posuere urna ut pellentesque. Fusce at libero diam. In pulvinar, nibh in rhoncus elementum, nunc mauris tristique odio, vitae dignissim sem tellus et purus. Donec nibh eros, pretium ac lobortis a, pharetra sed diam. Phasellus id est gravida, fermentum quam at, sodales justo.',
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
      // tslint:disable-next-line: max-line-length
      'Sed auctor, leo et dapibus varius, ligula leo iaculis erat, a volutpat leo ligula et ante. Maecenas tincidunt, urna et sodales mollis, magna tellus semper ex, et tristique eros quam in diam. Vestibulum diam quam, pellentesque ut diam sit amet, ultrices suscipit sapien. Proin enim augue, viverra vel sodales et, bibendum non lorem. Morbi venenatis arcu eu nunc condimentum ultrices. Suspendisse vehicula, tellus sit amet volutpat aliquam, ipsum tortor cursus velit, ac venenatis risus mi ut diam. Fusce lorem lacus, rhoncus quis dolor sit amet, sollicitudin lacinia eros. Nam pulvinar accumsan auctor. \n Ut sit amet dictum arcu, quis posuere leo. Etiam quis placerat nulla. Maecenas orci turpis, tempor in viverra vitae, efficitur sed eros. Nulla dignissim nec nibh sit amet interdum. Pellentesque lacus risus, suscipit in aliquam consequat, pretium eget lorem. Proin eu ornare odio. Duis maximus felis eget luctus malesuada. Vivamus sit amet mattis quam, vitae porta sem. Cras interdum ullamcorper elit, sed faucibus sem varius vitae.',
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
      // tslint:disable-next-line: max-line-length
      'Vivamus auctor nec magna sit amet auctor. In quis congue justo. Aliquam eleifend tellus ac turpis bibendum maximus. Maecenas ac velit fringilla, feugiat nisi et, iaculis ex. Sed laoreet dui in cursus volutpat. Aliquam urna turpis, ultricies eu tristique quis, faucibus sit amet lacus. Nulla facilisi. Morbi eu eleifend libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet aliquet dolor. Ut suscipit nibh ut orci dapibus vehicula. Fusce faucibus urna sed urna commodo molestie. In ac lacus purus. Donec viverra sapien in mi bibendum, eget tempor nisi porta. Phasellus et leo turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \n Morbi vitae lacinia neque. Sed sem dolor, scelerisque eu tincidunt varius, rutrum quis purus. In tristique, tortor ut fringilla fermentum, velit orci euismod lectus, non suscipit est dui vitae orci. Duis maximus enim aliquam mauris tempor, eu eleifend purus aliquet. Aliquam erat volutpat. Suspendisse at dolor eget tellus interdum volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur id faucibus dui, vel suscipit lorem. Sed dictum in urna congue sodales. Suspendisse sollicitudin volutpat erat in luctus. Nullam quis lacinia augue. Fusce lacinia feugiat neque, sit amet interdum mi.',
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
