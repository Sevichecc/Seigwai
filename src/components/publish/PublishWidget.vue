<script lang="ts" setup>
interface Action {
  name: string
  icon: string
}

const actions: Action[] = [
  {
    name: 'file',
    icon: 'i-tabler-paperclip',
  }, {
    name: 'poll',
    icon: 'i-tabler-chart-bar',
  },
  {
    name: 'emoji-picker',
    icon: 'i-tabler-mood-smile-beam',
  },
  {
    name: 'schedule',
    icon: 'i-tabler-calendar-time',
  },
  {
    name: 'content-warning',
    icon: 'i-tabler-alert-triangle',
  },
]
</script>

<template>
  <div class="flex justify-between w-full content-between items-center">
    <div>
      <button v-for="{ name, icon } in actions" :key="name" class="btn btn-ghost btn-square">
        <span :class="icon" class="w-5 h-5" />
      </button>
    </div>
    <div class="flex items-center gap-1">
      <div class="dropdown dropdown-bottom dropdown-end menu-compact">
        <label tabindex="0" class="btn btn-sm btn-ghost gap-1">中文<span class="i-tabler-chevron-down" /></label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-bottom dropdown-end menu-compact">
        <label tabindex="0" class="btn btn-sm btn-ghost gap-1"><span class="i-tabler-world w-5 h-5" /><span class="i-tabler-chevron-down" /></label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      <button class="btn btn-sm gap-2">
        <span class="i-tabler-send" />
        Post
      </button>
    </div>
  </div>
</template>
