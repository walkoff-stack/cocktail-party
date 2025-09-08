<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { CocktailList } from '@/modules/cocktail-list';
import { COCKTAIL_CODES } from '@/shared/consts/cocktails.ts';
import type { CocktailCode } from '@/shared/consts/cocktails.ts';

const route = useRoute();
const code = computed<CocktailCode>(() => {
  const paramCode = route.params.code;

  if (typeof paramCode !== 'string') {
    return COCKTAIL_CODES[0];
  }

  return paramCode as CocktailCode;
});
</script>

<template>
  <cocktail-list :code="code"></cocktail-list>
</template>
