<script>
import { defineComponent } from 'vue'
import { MilkdownProvider } from '@milkdown/vue'

export default defineComponent({
  name: 'MilkdownEditorWrapper',
  components: {
    MilkdownProvider,
    MilkdownEditor,
  },
  setup: () => {},
})
</script>

<template>
  <MilkdownProvider>
    <MilkdownEditor />
  </MilkdownProvider>
</template>

