<script setup lang="ts">
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Link from '@tiptap/extension-link'
import Highlight from '@tiptap/extension-highlight'
import { lowlight } from 'lowlight/lib/core'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Placeholder from '@tiptap/extension-placeholder'

import html from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import c from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'
import bash from 'highlight.js/lib/languages/bash'
import scss from 'highlight.js/lib/languages/scss'
import go from 'highlight.js/lib/languages/go'
import rust from 'highlight.js/lib/languages/rust'

import suggestion from './suggestion'
import Commands from './commands'
import DraggableItem from './DraggableItem'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)
lowlight.registerLanguage('py', python)
lowlight.registerLanguage('c', c)
lowlight.registerLanguage('cpp', cpp)
lowlight.registerLanguage('bash', bash)
lowlight.registerLanguage('scss', scss)
lowlight.registerLanguage('go', go)
lowlight.registerLanguage('rs', rust)

const editor = useEditor({
  content: `<p>This is a boring paragraph.</p>
        <div data-type="draggable-item">
          <p>Followed by a fancy draggable item.</p>
        </div>
        <div data-type="draggable-item">
          <p>And another draggable item.</p>
          <div data-type="draggable-item">
            <p>And a nested one.</p>
            <div data-type="draggable-item">
              <p>But can we go deeper?</p>
            </div>
          </div>
        </div>
        <p>Let’s finish with a boring paragraph.</p>`,
  extensions: [
    StarterKit,
    Typography,
    DraggableItem,
    Link.configure({
      openOnClick: false,
    }),
    Commands.configure({
      suggestion,
    }),
    Highlight.configure({
      HTMLAttributes: {
        class: 'bg-blue-100',
      },
    }),
    CodeBlockLowlight.configure({
      lowlight,
      HTMLAttributes: {
        class: 'hljs not-prose',
      },
    }),
    Placeholder.configure({
      placeholder: ({ node }) => {
        if (node.type.name === 'heading') {
          switch (node.attrs.level) {
            case 1:
              return 'Heading 1'
            case 2:
              return 'Heading 2'
            case 3:
              return 'Heading 3'
          }
        }
        return 'Can you add some further context?'
      },
    }),
  ],
  editable: true,
  autofocus: true,
  editorProps: {
    attributes: {
      class: 'prose prose-slate mx-auto',
    },
  },
})
</script>

<template>
  <BubbleMenu v-if="editor" :editor="editor" />
  <EditorContent :editor="editor" />
</template>

<style lang="scss">
/* Placeholder (at the top) */
.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}

/* Placeholder (on every new line) */
.ProseMirror :where(p.is-empty,h1.is-empty,h2.is-empty,h3.is-empty)::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}
</style>
