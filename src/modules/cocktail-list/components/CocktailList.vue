<script setup lang="ts">
import { useCocktailStore } from '@/modules/cocktail-list/stores/cocktail-store.ts';
import { computed, onMounted, watch } from 'vue';
import type { CocktailCode } from '@/shared/consts/cocktails.ts';
import CocktailCard from '@/modules/cocktail-list/components/CocktailCard.vue';
import LoadingBar from '@/shared/components/ui/LoadingBar.vue';
import ErrorMessage from '@/shared/components/ui/ErrorMessage.vue';

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
    <loading-bar v-if="loading"></loading-bar>
    <error-message v-if="error">Error: {{ error }}</error-message>
    <div v-else>
      <cocktail-card
        v-for="cocktail of cocktails"
        :key="cocktail.id"
        :cocktail="cocktail"
      ></cocktail-card>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
