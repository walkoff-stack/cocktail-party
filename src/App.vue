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
@use '@/shared/styles/mixins';
.layout {
  display: grid;
  grid-template-areas: 'content';
  grid-template-columns: 1fr;
  min-height: 100dvh;
  position: relative;

  @include res('desktop') {
    grid-template-areas: 'sidebar content';
    grid-template-columns: 300px 1fr;
  }
}

.content {
  grid-area: content;
  min-height: 100dvh;
  padding: 2rem 1rem;
  box-sizing: border-box;
}
</style>
