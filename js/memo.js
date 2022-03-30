Vue.component('memo-component', {
  template: `<div class="flex">
  <div v-for="m in list">{{ m }}</div>
  </div>`,
  props: ['list']
})