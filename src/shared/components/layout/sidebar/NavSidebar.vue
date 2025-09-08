<script setup lang="ts">
import { ref, computed } from 'vue';
import type { VNodeRef } from 'vue';
import { COCKTAIL_CODES } from '@/shared/consts/cocktails.ts';

const navControlRef = ref<VNodeRef | null>(null);
const navOpenedStatus = ref(false);
const navStatusClassname = computed(() => (navOpenedStatus.value ? 'active' : ''));
const navToggle = () => {
  navOpenedStatus.value = !navOpenedStatus.value;
};
</script>

<template>
  <div @click="navToggle" :class="navStatusClassname" :ref="navControlRef" class="nav-control">
    <span></span>
  </div>
  <nav :class="navStatusClassname" class="nav-sidebar">
    <div v-for="code of COCKTAIL_CODES" :key="code" class="nav-sidebar__item">
      <router-link :to="`/${code}`">{{ code }}</router-link>
    </div>
  </nav>
</template>

<style lang="scss">
@use '@/shared/styles/variables' as *;
@use '@/shared/styles/mixins' as *;
.nav-sidebar {
  grid-area: sidebar;
  padding: 3rem 1rem 2rem;
  top: 0;
  bottom: 0;
  min-height: 100dvh;
  box-sizing: border-box;
  background: $background-global;
  position: fixed;
  left: -100%;
  width: 200px;
  transition: left 0.3s ease-in;
  will-change: left;

  &.active {
    left: 0;
  }

  @include res('desktop') {
    padding-top: 2rem;
    border-right: 1px solid $black;
    position: sticky;
    left: 0;
    width: auto;
    height: 100dvh;
  }

  &__item {
    display: flex;
    border-bottom: 1px solid rgba($black, 0.5);
    padding: 0.25rem 0;

    a {
      width: 100%;
      text-decoration: none;
      padding: 0.25rem;
      color: $black;
      font-weight: bold;
      font-family: Arial, sans-serif;
      border-radius: 4px;
      background: $background-global;
      transition: all 0.15s;

      &.active {
        color: $white;
        background: $black;
      }

      &:first-letter {
        text-transform: uppercase;
      }

      &:hover {
        color: $white;
        background: $black;
      }
    }
  }
}

.nav-control {
  position: fixed;
  z-index: 2;
  width: 20px;
  height: 16px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  top: 15px;
  left: 15px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: $burger-stick;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &::before {
    top: 0;
    transform-origin: center;
  }
  &::after {
    bottom: 0;
    transform-origin: center;
  }

  span {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: $burger-stick;
    border-radius: 2px;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    opacity: 1;
  }

  &.active {
    span {
      opacity: 0;
      transform: translateY(-50%) scale(0);
    }

    &::before {
      transform: rotate(45deg) translate(4px, 6px);
      background-color: $burger-stick-active;
    }

    &::after {
      transform: rotate(-45deg) translate(4px, -6px);
      background-color: $burger-stick-active;
    }
  }

  &:hover {
    &::before,
    &::after,
    span {
      background-color: $burger-stick-hover;
    }
  }

  @include res('desktop') {
    display: none;
  }
}
</style>
