<script>
// ⚠️ Experiment
// Ref: https://tiptap.dev/experiments/commands
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },

    command: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {
      selectedIndex: 0,
    }
  },

  watch: {
    items() {
      this.selectedIndex = 0
    },
  },

  methods: {
    onKeyDown({ event }) {
      if (event.key === 'ArrowUp') {
        this.upHandler()
        return true
      }

      if (event.key === 'ArrowDown') {
        this.downHandler()
        return true
      }

      if (event.key === 'Enter') {
        this.enterHandler()
        return true
      }

      return false
    },

    upHandler() {
      this.selectedIndex = ((this.selectedIndex + this.items.length) - 1) % this.items.length
    },

    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length
    },

    enterHandler() {
      this.selectItem(this.selectedIndex)
    },

    selectItem(index) {
      const item = this.items[index]

      if (item)
        this.command(item)
    },
  },
}
</script>

<template>
  <div v-if="items.length" class="menu menu-compact bg-white w-44 p-1 rounded-lg shadow-lg  border-slate-200 border ">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="rounded-lg"
      :class="{ 'active bg-slate-200': index === selectedIndex }"
      @click="selectItem(index)"
    >
      <a class="hover:bg-slate-200 text-slate-900 active:bg-slate-300"><span :class="item.icon" class="h-4 w-4" />{{ item.title }}</a>
    </li>
  </div>
</template>
