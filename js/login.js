Vue.component('login-component',{
  template: `<div>
  <form v-if="!loged" @submit="login">
  <input type="text" v-model="name" placeholder="이름을 입력해주세요" required>
  <input type="submit" value="log in">
  </form>
  <h2 v-else>{{ "반갑습니다 "+name+"님" }}</h2>
  </div>`,
  data: function() {
    return {
      loged: false,
      name:""
    }
  },
  methods: {
    login: function(e) {
      e.preventDefault();
      this.loged=true;
      this.$emit('logon');
    }
  }
})