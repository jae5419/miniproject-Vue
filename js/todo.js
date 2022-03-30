Vue.component('todo-component', {
  template: `<div>
  <li :style="{color : checkcolor}">
  <input type="checkbox" v-model:checked="check" @click="fcolor">
  <slot></slot>
  <button @click="delThis(index)">X</button>
  </li>
  </div>`,
  props: ['index'],
  methods: {
    delThis: function(index) {
      this.$emit('del', index);
    },
    fcolor: function() {
      this.checkcolor=this.check ? "white" : "darkgray";
    }
  },
  data: function() {
    return {
      check: false,
      checkcolor: ""
    }
  }
})