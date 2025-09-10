import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Cocktail } from '@/modules/cocktail-list/types/cocktail.types.ts';
import { CocktailApi } from '@/modules/cocktail-list/api/cocktail-api.ts';
import { CocktailMapper } from '@/modules/cocktail-list/services/cocktail-mapper.ts';
import { CocktailService } from '@/modules/cocktail-list/services/cocktail-service.ts';
import type { CocktailCode } from '@/shared/consts/cocktails.ts';

export const useCocktailStore = defineStore('cocktail', () => {
  // DI
  const api = new CocktailApi();
  const mapper = new CocktailMapper();
  const service = new CocktailService(api, mapper);

  const loading = ref(false);
  const error = ref<string | null>(null);
  type CocktailCache = { [K in CocktailCode]: Cocktail[] };
  const cocktailsCache = ref<CocktailCache>({} as CocktailCache);

  const getCocktailsByCode = computed(() => (code: CocktailCode) => {
    return cocktailsCache.value[code] || [];
  });

  const fetchCocktails = async (code: CocktailCode) => {
    if (cocktailsCache.value[code]) return; // data exist, request is not required

    loading.value = true;
    error.value = null;

    try {
      const cocktails = await service.getCocktailsByCode(code);
      cocktailsCache.value[code] = cocktails;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error';
    } finally {
      loading.value = false;
    }
  };

  const clearCache = () => {
    cocktailsCache.value = {} as CocktailCache;
  };

  return {
    loading,
    error,
    cocktailsCache,
    getCocktailsByCode,
    fetchCocktails,
    clearCache,
  };
});
