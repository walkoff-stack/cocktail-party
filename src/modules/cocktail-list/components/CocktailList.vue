<script setup lang="ts">
import { useCocktailStore } from '@/modules/cocktail-list/stores/cocktail-store.ts';
import { computed, onMounted, watch } from 'vue';
import type { CocktailCode } from '@/shared/consts/cocktails.ts';

const props = defineProps<{
  code: CocktailCode;
}>();

const store = useCocktailStore();

const cocktails = computed(() => store.getCocktailsByCode(props.code));
const loading = computed(() => store.loading);
const error = computed(() => store.error);

onMounted(() => {
  store.fetchCocktails(props.code);
});

watch(
  () => props.code,
  (newCode) => {
    store.fetchCocktails(newCode);
  }
);
</script>

<template>
  <div class="cocktail-list">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div v-for="drink of cocktails" :key="drink.id">
        {{ drink.drink }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
