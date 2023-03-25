<script setup lang="ts">
import { useInstance } from '@milkdown/vue'
import { TooltipProvider } from '@milkdown/plugin-tooltip'
import { usePluginViewContext } from '@prosemirror-adapter/vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import type { CmdKey } from '@milkdown/core'
import type { VNodeRef } from 'vue'
import { callCommand } from '@milkdown/utils'

import {
  toggleEmphasisCommand,
  toggleInlineCodeCommand,
  toggleStrongCommand,
  wrapInBlockquoteCommand,
} from '@milkdown/preset-commonmark'
import { toggleStrikethroughCommand } from '@milkdown/preset-gfm'

const [loading, get] = useInstance()

const call = <T>(command: CmdKey<T>, payload?: T) => {
  return get()?.action(callCommand(command, payload))
}

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
</script>

<template>
  <div v-if="loading" ref="divRef">
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(toggleStrongCommand.key)"
    >
      Bold
    </button>
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(toggleInlineCodeCommand.key)"
    >
      Code
    </button>
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(toggleEmphasisCommand.key)"
    >
      Italic
    </button>
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(wrapInBlockquoteCommand.key)"
    >
      Quote
    </button>
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(toggleStrikethroughCommand.key)"
    >
      StrikeThrough
    </button>
  </div>
</template>
