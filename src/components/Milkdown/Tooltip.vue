<script setup lang="ts">
import { TooltipProvider } from '@milkdown/plugin-tooltip'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { usePluginViewContext } from '@prosemirror-adapter/vue'
import type { VNodeRef } from 'vue'
import { toggleBold } from '../../utils/utils'

let tooltipProvider: TooltipProvider

const { view, prevState } = usePluginViewContext()
const divRef = ref<VNodeRef>()

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
</script>

<template>
  <div ref="divRef">
    <button
      className="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @mousedown="toggleBold"
    >
      Bold
    </button>
  </div>
</template>
