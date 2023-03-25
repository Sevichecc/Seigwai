/* eslint-disable antfu/if-newline */
import { useInstance } from '@milkdown/vue'
import {
  createCodeBlockCommand,
  toggleEmphasisCommand,
  toggleInlineCodeCommand,
  toggleStrongCommand,
  wrapInBlockquoteCommand,
} from '@milkdown/preset-commonmark'
import { toggleStrikethroughCommand } from '@milkdown/preset-gfm'
import { callCommand } from '@milkdown/utils'
import { editorViewCtx } from '@milkdown/core'

export const useCommands = () => {
  const [loading, get] = useInstance()

  const toggleBold = (e: Event) => {
    if (loading.value) return
    e.preventDefault()
    get()!.action(callCommand(toggleStrongCommand.key))
  }

  const toggleInlineCode = (e: Event) => {
    if (loading.value) return
    e.preventDefault()
    get()!.action(callCommand(toggleInlineCodeCommand.key))
  }

  const toggleItalic = (e: Event) => {
    if (loading.value) return
    e.preventDefault()
    get()!.action(callCommand(toggleEmphasisCommand.key))
  }
  const toggleStrikeThrough = (e: Event) => {
    if (loading.value) return
    e.preventDefault()
    get()!.action(callCommand(toggleStrikethroughCommand.key))
  }

  const wrapInBlockQuote = (e: Event) => {
    if (loading.value) return
    e.preventDefault()
    get()!.action(callCommand(wrapInBlockquoteCommand.key))
  }
  const addCodeBlock = (e: Event) => {
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

  return {
    toggleBold,
    toggleInlineCode,
    toggleItalic,
    toggleStrikeThrough,
    wrapInBlockQuote,
    addCodeBlock,
  }
}
