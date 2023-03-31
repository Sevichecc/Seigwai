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
import BubbleMenu from './BubbleMenu.vue'
import Commands from './commands'

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
  content: `<p>
          That’s a boring paragraph followed by a fenced code block:
        </p>
        <pre><code>for (var i=1; i <= 20; i++)
{
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre>
        <p>
          Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.
        </p>`,
  extensions: [
    StarterKit,
    Typography,
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
      // Use different placeholders depending on the node type:
      // placeholder: 'Write something …'
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
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }
}

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
