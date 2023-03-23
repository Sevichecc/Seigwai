<script setup lang="ts">
import { Editor, defaultValueCtx, rootCtx } from '@milkdown/core'
import { commonmark } from '@milkdown/preset-commonmark'
import { nord } from '@milkdown/theme-nord'
import { history } from '@milkdown/plugin-history'
import { math } from '@milkdown/plugin-math'
import { Milkdown, useEditor } from '@milkdown/vue'
import { tooltipFactory } from '@milkdown/plugin-tooltip'
import { usePluginViewFactory } from '@prosemirror-adapter/vue'
import { gfm } from '@milkdown/preset-gfm'
import { clipboard } from '@milkdown/plugin-clipboard'
import { emoji } from '@milkdown/plugin-emoji'
import { block } from '@milkdown/plugin-block'
import { cursor } from '@milkdown/plugin-cursor'

import Tooltip from './Tooltip.vue'
import Slash from './Slash.vue'
import Block from './Block.vue'

const tooltip = tooltipFactory('Text')
const slash = tooltipFactory('Text')

const markdown = `# Milkdown Vue Commonmark
> You're scared of a world where you're needed.

This is a demo for using Milkdown with **Vue**.`

const pluginViewFactory = usePluginViewFactory()

useEditor((root) => {
  return Editor.make()
    .config(nord)
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, markdown)
      ctx.set(tooltip.key, {
        view: pluginViewFactory({
          component: Tooltip,
        }),
      })
      ctx.set(slash.key, {
        view: pluginViewFactory({
          component: Slash,
        }),
      })
      ctx.set(block.key, {
        view: pluginViewFactory({
          component: Block,
        }),
      })
    })
    .use(commonmark)
    .use(tooltip)
    .use(slash)
    .use(history)
    .use(math)
    .use(gfm)
    .use(clipboard)
    .use(emoji)
    .use(block)
    .use(cursor)
})
</script>

<template>
  <Milkdown />
</template>
