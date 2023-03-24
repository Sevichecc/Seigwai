/* eslint-disable antfu/if-newline */
import { useInstance } from '@milkdown/vue'
import { editorViewCtx } from '@milkdown/core'
import { callCommand } from '@milkdown/utils'
import {
  createCodeBlockCommand,
  toggleStrongCommand,
} from '@milkdown/preset-commonmark'

const [loading, get] = useInstance()

export const addCodeBlock = (e: Event) => {
  if (loading.value) return
  e.preventDefault()

  get()!.action((ctx) => {
    const view = ctx.get(editorViewCtx)
    const { dispatch, state } = view
    const { tr, selection } = state
    const { from } = selection
    dispatch(tr.deleteRange(from - 1, from))
    return callCommand(createCodeBlockCommand.key)(ctx)
  })
}

export const toggleBold = (e: Event) => {
  if (loading.value) return
  e.preventDefault()
  get()!.action(callCommand(toggleStrongCommand.key))
}
