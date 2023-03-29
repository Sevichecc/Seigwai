<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import { BubbleMenu } from '@tiptap/vue-3'
import { nextTick, ref } from 'vue'

const { editor } = defineProps<{ editor: Editor }>()

const url = ref('')
const showUrlInput = ref(false)
const inputUrl = ref<HTMLInputElement | null>(null)

const openLinkInput = () => {
  url.value = editor.getAttributes('link').href || ''
  showUrlInput.value = true
  nextTick(() => inputUrl.value?.focus())
}

const setLink = () => {
  if (url.value === null) {
    showUrlInput.value = false
    return
  }

  // empty
  if (url.value === '') {
    editor.chain().focus().extendMarkRange('link').unsetLink().run()
    showUrlInput.value = false
    return
  }

  // unpdate link
  editor
    .chain()
    .focus()
    .extendMarkRange('link')
    .setLink({ href: url.value })
    .run()

  showUrlInput.value = false
}
</script>

<template>
  <BubbleMenu
    :editor="editor"
    :tippy-options="{ duration: 50 }"
    class="flex text-gray-700 bg-white grass rounded-md p-[2px] shadow-xl border-slate-100 border"
  >
    <div v-show="!showUrlInput">
      <button
        class="menu-btn"
        :class="{ 'btn-active': editor.isActive('bold') }"
        @click="editor.chain().focus().toggleBold().run()"
      >
        <span
          :class="[
            editor.isActive('bold') ? 'i-tabler-bold-off' : 'i-tabler-bold',
          ]"
        />
      </button>
      <button
        class="menu-btn"
        :class="{ 'btn-active': editor.isActive('italic') }"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        <span class="i-tabler-italic" />
      </button>
      <button
        class="menu-btn"
        :class="{ 'btn-active': editor.isActive('strike') }"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        <span class="i-tabler-strikethrough" />
      </button>
      <button
        class="menu-btn"
        :class="{ 'btn-active': editor.isActive('code') }"
        @click="editor.chain().focus().toggleCode().run()"
      >
        <span
          :class="[
            editor.isActive('code') ? 'i-tabler-code-off' : 'i-tabler-code',
          ]"
        />
      </button>
      <button
        class="menu-btn"
        :class="{ 'btn-active': editor.isActive('blockquote') }"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        <span
          :class="[
            editor.isActive('blockquote')
              ? 'i-tabler-quote-off'
              : 'i-tabler-quote',
          ]"
        />
      </button>
      <button
        :class="{ 'btn-active': editor.isActive('link') }"
        class="menu-btn"
        @click="openLinkInput"
      >
        <span
          :class="[
            editor.isActive('link') ? 'i-tabler-unlink' : 'i-tabler-link',
          ]"
        />
      </button>
    </div>
    <div v-show="showUrlInput" class="input-group input-group-sm">
      <input
        ref="inputUrl"
        v-model.trim="url"
        class="input input-sm focus:outline-none"
        placeholder="Add Link to text"
        @blur="setLink"
      >
      <button class="btn btn-sm btn-square">
        <span class="i-tabler-link p-2" />
      </button>
    </div>
  </BubbleMenu>
</template>
