<script setup lang="ts">
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [StarterKit, Typography],
  editable: true,
  autofocus: true,
})
</script>

<template>
  <div>
    <BubbleMenu
      v-if="editor"
      :editor="editor"
      :tippy-options="{ duration: 100 }"
      class="flex text-gray-700 bg-slate-50 rounded-md"
    >
      <button
        class="btn btn-sm btn-ghost"
        @click="editor?.chain().focus().toggleBold().run()"
      >
        bold
      </button>
      <button
        class="btn btn-sm btn-ghost"
        @click="editor?.chain().focus().toggleItalic().run()"
      >
        italic
      </button>
      <button
        class="btn btn-sm btn-ghost"
        @click="editor?.chain().focus().toggleStrike().run()"
      >
        strike
      </button>
      <button
        class="btn btn-sm btn-ghost"
        @click="editor?.chain().focus().toggleCode().run()"
      >
        Code
      </button>
      <button
        class="btn btn-sm btn-ghost"
        @click="editor?.chain().focus().toggleBlockquote().run()"
      >
        Quote
      </button>
    </BubbleMenu>
    <EditorContent :editor="editor" />
  </div>
</template>
