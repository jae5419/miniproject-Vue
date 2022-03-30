Vue.component('input-component', {
  template: `<div>
  <input type="text" v-model="text" placeholder="메모를 작성해주세요">
  <button @click="addMemo" class="memo">memo</button>
  <button @click="addTodo" class="todo">toDo</button>
  </div>`,
  data: function() {
    return {
      text: ""
    }
  },
  methods: {
    addMemo: function() {
      this.$emit('memo', this.text);
      this.text="";
    },
    addTodo: function() {
      this.$emit('todo', this.text);
      this.text="";
    }
  }
})