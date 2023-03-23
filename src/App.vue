<script setup lang="ts">
import Milkdown from './components/Milkdown/MilkdownEditor.vue'
import { MilkdownProvider } from '@milkdown/vue';
</script>

<template>
  <MilkdownProvider>
    <Milkdown />
  </MilkdownProvider>
</template>
