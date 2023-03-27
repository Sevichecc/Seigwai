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
import LinkWidge from './LinkWidge.vue'

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
    <div class="flex text-gray-700 bg-slate-50 border rounded-md grass">
      <button
        class="btn btn-sm btn-ghost"
        @click.prevent="call(toggleStrongCommand.key)"
      >
        B
      </button>
      <button
        class="btn btn-sm btn-ghost i-mingcute-code-line"
        @click.prevent="call(toggleInlineCodeCommand.key)"
      ></button>
      <button
        class="btn btn-sm btn-ghost"
        @click.prevent="call(toggleEmphasisCommand.key)"
      >
        Italic
      </button>
      <button
        class="btn btn-sm btn-ghost"
        @click.prevent="call(wrapInBlockquoteCommand.key)"
      >
        Quote
      </button>
      <button
        class="btn btn-sm btn-ghost"
        @click.prevent="call(toggleStrikethroughCommand.key)"
      >
        StrikeThrough
      </button>
      <button
        class="btn btn-sm btn-ghost"
        @click.prevent="call(toggleStrikethroughCommand.key)"
      >
        Link
      </button>
    </div>
  </div>
</template>
