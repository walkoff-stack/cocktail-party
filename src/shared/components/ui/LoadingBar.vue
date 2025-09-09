<script setup lang="ts"></script>

<template>
  <div class="loading">Loading... <span>📀</span></div>
</template>

<style scoped lang="scss">
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    animation: loading 0.75s infinite linear;
    transform-origin: center;
    backface-visibility: hidden;
    perspective: 1000px;
  }
}
</style>
