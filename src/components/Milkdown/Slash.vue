<script setup lang="ts">
import { SlashProvider } from '@milkdown/plugin-slash'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { usePluginViewContext } from '@prosemirror-adapter/vue'
import type { VNodeRef } from 'vue'
import { addCodeBlock } from '../../utils/utils'

let tooltipProvider: SlashProvider

const { view, prevState } = usePluginViewContext()
const divRef = ref<VNodeRef>()

onMounted(() => {
  tooltipProvider = new SlashProvider({
    content: divRef.value as any,
  })

  tooltipProvider.update(view.value, prevState.value)
})

watch([view, prevState], () => {
  tooltipProvider?.update(view.value, prevState.value)
})

onUnmounted(() => {
  tooltipProvider.destroy()
})
</script>

<template>
  <div ref="divRef">
    <button
      className="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @mousedown="addCodeBlock"
    >
      Code Block
    </button>
  </div>
</template>
