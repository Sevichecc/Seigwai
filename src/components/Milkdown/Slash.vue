<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useInstance } from '@milkdown/vue'
import { usePluginViewContext } from '@prosemirror-adapter/vue'
import { editorViewCtx } from '@milkdown/core'
import { SlashProvider } from '@milkdown/plugin-slash'
import { callCommand } from '@milkdown/utils'

import type { VNodeRef } from 'vue'
import type { CmdKey } from '@milkdown/core'
import {
  createCodeBlockCommand,
  insertHrCommand,
  wrapInBlockquoteCommand,
  wrapInBulletListCommand,
  wrapInHeadingCommand,
  wrapInOrderedListCommand,
} from '@milkdown/preset-commonmark'

const [loading, get] = useInstance()

const call = <T>(command: CmdKey<T>, payload?: T) => {
  return get()!.action((ctx) => {
    const view = ctx.get(editorViewCtx)
    const { dispatch, state } = view
    const { tr, selection } = state
    const { from } = selection
    dispatch(tr.deleteRange(from - 1, from))
    return callCommand(command, payload)(ctx)
  })
}

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
  <div v-if="loading" ref="divRef">
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(createCodeBlockCommand.key)"
    >
      Code Block
    </button>
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(wrapInHeadingCommand.key, 1)"
    >
      Heading1
    </button>
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(wrapInHeadingCommand.key, 2)"
    >
      Heading2
    </button>
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(wrapInHeadingCommand.key, 3)"
    >
      Heading3
    </button>
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(wrapInBulletListCommand.key)"
    >
      BulletList
    </button>
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(wrapInOrderedListCommand.key)"
    >
      OrderList
    </button>
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(wrapInBlockquoteCommand.key)"
    >
      Quote
    </button>
    <button
      class="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
      @click.prevent="call(insertHrCommand.key)"
    >
      Hr
    </button>
  </div>
</template>
