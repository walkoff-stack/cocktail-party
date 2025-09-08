import type { ICocktailApi } from '@/modules/cocktail-list/api/cocktail-api.ts';
import type { ICocktailMapper } from '@/modules/cocktail-list/services/cocktail-mapper.ts';
import type { Cocktail } from '@/modules/cocktail-list/types/cocktail.types.ts';

export interface ICocktailService {
  getCocktailsByCode(code: string): Promise<Cocktail[]>;
}

export class CocktailService implements ICocktailService {
  constructor(
    public api: ICocktailApi,
    public mapper: ICocktailMapper
  ) {}

  async getCocktailsByCode(code: string): Promise<Cocktail[]> {
    const response = await this.api.fetchCocktails({ code });

    if (!response.drinks) {
      return [];
    }

    return response.drinks.map((drink) => this.mapper.fromApi(drink));
  }
}
