import { Ingredient } from 'src/app/shared/models/ingredient.model';

export class Recipe {
  constructor(
    public name: string,
    public shortDescription: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ) {}
}
