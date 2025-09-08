<script setup lang="ts">
import NavSidebar from '@/shared/components/layout/sidebar/NavSidebar.vue';
</script>

<template>
  <div class="layout container">
    <nav-sidebar></nav-sidebar>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss">
@use '@/shared/styles/container';
@use '@/shared/styles/mixins' as *;
@use '@/shared/styles/variables' as *;

.layout {
  display: grid;
  grid-template-areas: 'content';
  grid-template-columns: 1fr;
  min-height: 100dvh;
  position: relative;

  @include res('desktop') {
    grid-template-areas: 'sidebar content';
    grid-template-columns: 200px 1fr;
    background: $background-global;
  }
}

.content {
  grid-area: content;
  min-height: 100dvh;
  padding: 3rem 1rem 2rem;
  box-sizing: border-box;

  @include res('desktop') {
    padding-top: 2rem;
  }
}
</style>
