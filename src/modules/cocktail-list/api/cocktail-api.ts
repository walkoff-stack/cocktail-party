import type {
  CocktailApiResponse,
  CocktailQueryParams,
} from '@/modules/cocktail-list/types/cocktail.types.ts';

export interface ICocktailApi {
  fetchCocktails(params: CocktailQueryParams): Promise<CocktailApiResponse>;
}

export class CocktailApi implements ICocktailApi {
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  async fetchCocktails({ code }: CocktailQueryParams): Promise<CocktailApiResponse> {
    const response = await fetch(`${this.baseUrl}/search.php?s=${code}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}
