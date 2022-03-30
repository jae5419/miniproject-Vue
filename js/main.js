new Vue({
  el: "#app",
  data: {
    images: ["0.jpg", "1.jpg", "2.jpg"],
    loged: false,
    memolist: ["미리 만들어진 메모입니다","미리 만들어진 메모입니다2"],
    todolist: []
  },
  methods: {
    login: function() {
      this.loged=true;
    },
    addMemo: function(text) {
      this.memolist.push(text);
    },
    addTodo: function(text) {
      this.todolist.push(text);
    },
    delTodo: function(i) {
      this.todolist.splice(i, 1);
    }
  },
  created: function() {
    const chooseImage=this.images[Math.floor(Math.random()*this.images.length)];
    document.body.style.background=`url(./img/${chooseImage})`;
  }
})