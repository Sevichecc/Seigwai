<script setup lang="ts">
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import BubbleMenu from './BubbleMenu.vue'

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [StarterKit, Typography],
  editable: true,
  autofocus: true,
})
</script>

<template>
  <BubbleMenu
    v-if="editor"
    :editor="editor" />
  <EditorContent :editor="editor" />
</template>
