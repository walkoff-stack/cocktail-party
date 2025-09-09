<script setup lang="ts">
import NavSidebar from '@/shared/components/layout/sidebar/NavSidebar.vue';
</script>

<template>
  <div class="layout container">
    <nav-sidebar></nav-sidebar>
    <div class="overlay"></div>
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
  background: $background-global;

  @include res('desktop') {
    grid-template-areas: 'sidebar content';
    grid-template-columns: 200px 1fr;
  }
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
  will-change: opacity;

  .active ~ & {
    opacity: 1;
  }

  @include res('desktop') {
    display: none;
  }
}

.content {
  grid-area: content;
  min-height: 100dvh;
  padding: 3rem 1rem 2rem;
  box-sizing: border-box;
  position: relative;

  @include res('desktop') {
    padding-top: 2rem;
  }
}
</style>
