// ⚠️ Experiment
// Ref: https://tiptap.dev/experiments/commands
import { VueRenderer } from '@tiptap/vue-3'
import tippy from 'tippy.js'

import CommandsList from '../../components/tiptap/CommandsList.vue'

export default {
  items: ({ query }) => {
    return [
      {
        title: 'Heading 1',
        icon: 'i-tabler-h-1',
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode('heading', { level: 1 })
            .run()
        },
      },
      {
        title: 'Heading 2',
        icon: 'i-tabler-h-2',
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode('heading', { level: 2 })
            .run()
        },
      },
      {
        title: 'Heading 3',
        icon: 'i-tabler-h-3',
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode('heading', { level: 3 })
            .run()
        },
      },
      {
        title: 'Code block',
        icon: 'i-tabler-terminal',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setCodeBlock().run()
        },
      },
      {
        title: 'Blockquote',
        icon: 'i-tabler-blockquote',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).toggleBlockquote().run()
        },
      },
      {
        title: 'Divider',
        icon: 'i-tabler-separator',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setHorizontalRule().run()
        },
      },
      {
        title: 'Bullet List',
        icon: 'i-tabler-list',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).toggleBulletList().run()
        },
      },
      {
        title: 'Ordered List',
        icon: 'i-tabler-list-numbers',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).toggleOrderedList().run()
        },
      },
    ]
      .filter(item =>
        item.title.toLowerCase().startsWith(query.toLowerCase()),
      )
      .slice(0, 10)
  },

  render: () => {
    let component
    let popup

    return {
      onStart: (props) => {
        component = new VueRenderer(CommandsList, {
          // using vue 2:
          // parent: this,
          // propsData: props,
          props,
          editor: props.editor,
        })

        if (!props.clientRect)
          return

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        })
      },

      onUpdate(props) {
        component.updateProps(props)

        if (!props.clientRect)
          return

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        })
      },

      onKeyDown(props) {
        if (props.event.key === 'Escape') {
          popup[0].hide()

          return true
        }

        return component.ref?.onKeyDown(props)
      },

      onExit() {
        popup[0].destroy()
        component.destroy()
      },
    }
  },
}
