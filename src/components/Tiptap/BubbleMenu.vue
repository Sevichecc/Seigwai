<script setup lang="ts">
import type { Editor
} from '@tiptap/vue-3';
 
import { BubbleMenu } from '@tiptap/vue-3'

const { editor } = defineProps<{ editor: Editor }>()

</script>

<template>
  <BubbleMenu
    :editor="editor"
    :tippy-options="{ duration: 100 }"
    class="flex text-gray-700 bg-white grass rounded-md p-[2px] shadow-xl border-slate-100 border"
  >
    <button
      class="menu-btn"
      placement="bold"
      @click="editor.chain().focus().toggleBold().run()"
    >
      <span class="i-tabler-bold" />
    </button>
    <button
      class="menu-btn"
      @click="editor.chain().focus().toggleItalic().run()"
    >
      <span class="i-tabler-italic" />
    </button>
    <button
      class="menu-btn"
      @click="editor.chain().focus().toggleStrike().run()"
    >
      <span class="i-tabler-strikethrough" />
    </button>
    <button
      class="menu-btn"
      @click="editor.chain().focus().toggleCode().run()"
    >
      <span class="i-tabler-code" />
    </button>
    <button
      class="menu-btn"
      @click="editor.chain().focus().toggleBlockquote().run()"
    >
      <span class="i-tabler-quote" />
    </button>
  </BubbleMenu>
</template>

<style lang="pcss">
.menu-btn {
    @apply btn btn-ghost btn-sm hover:bg-slate-200 rounded-md p-2;
}

.menu-btn > span {
  @apply w-4;
}
</style>