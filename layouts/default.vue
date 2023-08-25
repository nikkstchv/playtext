<template>
  <main>
    <SeoKit />
    <OgImageScreenshot />
    <slot />
  </main>
  <ModalsContainer />
</template>

<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
</script>
