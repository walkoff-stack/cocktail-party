import type {
  Cocktail,
  CocktailApiItem,
  Ingredient,
} from '@/modules/cocktail-list/types/cocktail.types.ts';

export interface ICocktailMapper {
  fromApi(apiCocktail: CocktailApiItem): Cocktail;
}

export class CocktailMapper implements ICocktailMapper {
  fromApi(apiCocktail: CocktailApiItem): Cocktail {
    const ingredients: Ingredient[] = [];

    for (let i = 1; i <= 15; i++) {
      const ingredientKey = `strIngredient${i}` as keyof CocktailApiItem;
      const measureKey = `strMeasure${i}` as keyof CocktailApiItem;

      const name = apiCocktail[ingredientKey];
      if (name) {
        ingredients.push({
          name,
          measure: apiCocktail[measureKey] || '',
        });
      }
    }

    return {
      id: apiCocktail.idDrink,
      category: apiCocktail.strCategory,
      drink: apiCocktail.strDrink,
      alcoholic: apiCocktail.strAlcoholic,
      glass: apiCocktail.strGlass,
      instructions: apiCocktail.strInstructions,
      image: apiCocktail.strDrinkThumb,
      ingredients,
    };
  }
}
