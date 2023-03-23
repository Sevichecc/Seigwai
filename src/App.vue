<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'
import Milkdown from './components/Milkdown/Editor.vue'
</script>

<template>
  <MilkdownProvider>
    <ProsemirrorAdapterProvider>
      <Milkdown />
    </ProsemirrorAdapterProvider>
  </MilkdownProvider>
</template>
