<script setup lang="ts">
import type { Cocktail } from '@/modules/cocktail-list';

defineProps<{
  cocktail: Cocktail;
}>();
</script>

<template>
  <article class="cocktail-card">
    <h1>{{ cocktail.drink }}</h1>
    <figure class="cocktail-card__image">
      <img :src="cocktail.image" loading="lazy" :alt="cocktail.drink" />
    </figure>
    <div class="cocktail-card__details">
      <p>{{ cocktail.category }}</p>
      <p>{{ cocktail.alcoholic }}</p>
      <p>{{ cocktail.glass }}</p>
      <h3>Instructions</h3>
      <p>{{ cocktail.instructions }}</p>
      <h3>List of ingredients:</h3>
      <p
        class="cocktail-card__ingredients"
        v-for="(item, $index) of cocktail.ingredients"
        :key="`${$index}_${item}`"
      >
        <span>{{ item.measure }}</span
        ><span>{{ item.name }}</span>
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use '@/shared/styles/mixins' as *;
.cocktail-card {
  display: grid;
  gap: 20px;
  grid-template-areas:
    'header'
    'image'
    'details';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: start;
  margin-bottom: 60px;

  @include res('tablet') {
    grid-template-areas:
      'header image'
      'details image';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
  }

  h1 {
    grid-area: header;
  }

  p {
    margin: 0 0 5px;
  }

  &__image {
    grid-area: image;
    margin: 0;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      object-position: top;

      @include res('tablet') {
        height: auto;
      }
    }
  }

  &__details {
    grid-area: details;
  }

  &__ingredients {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
</style>
