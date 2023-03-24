<script setup lang="ts">
import { TooltipProvider } from '@milkdown/plugin-tooltip'

import { usePluginViewContext } from '@prosemirror-adapter/vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'

import type { VNodeRef } from 'vue'
import { useAddCodeBlock, useToggleBold } from '../../composables/quickCommands'
const { view, prevState } = usePluginViewContext()

const divRef = ref<VNodeRef>()

let tooltipProvider: TooltipProvider

onMounted(() => {
  tooltipProvider = new TooltipProvider({
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

const { toggleBold } = useToggleBold()
const { addCodeBlock } = useAddCodeBlock()
</script>

<template>
  <div ref="divRef">
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click="toggleBold"
    >
      Bold
    </button>
    <button
      className="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @mousedown="addCodeBlock"
    >
      Code Block
    </button>
  </div>
</template>
