<script setup lang="ts">
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Link from '@tiptap/extension-link'
import BubbleMenu from './BubbleMenu.vue'
import Commands from './commands'
import suggestion from './suggestion'

const editor = useEditor({
  content: `<p>
          Wow, this editor has support for links to the whole <a href="https://en.wikipedia.org/wiki/World_Wide_Web">world wide web</a>. We tested a lot of URLs and I think you can add *every URL* you want. Isn’t that cool? Let’s try <a href="https://statamic.com/">another one!</a> Yep, seems to work.
        </p>
        <p>
          By default every link will get a <code>rel="noopener noreferrer nofollow"</code> attribute. It’s configurable though.
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
  ],
  editable: true,
  autofocus: true,
  editorProps: {
    attributes: {
      class: 'prose',
    },
  },
})
</script>

<template>
  <BubbleMenu v-if="editor" :editor="editor" />
  <EditorContent :editor="editor" />
</template>
