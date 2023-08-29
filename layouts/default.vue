<template>
  <main>
    <SeoKit />
    <OgImageScreenshot />
    <TheHeader />
    <slot />
  </main>
  <ModalsContainer />
</template>

<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
</script>
