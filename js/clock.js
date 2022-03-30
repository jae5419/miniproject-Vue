Vue.component('clock-component', {
  template: `<h1>{{ time }}</h1>`,
  data: function() {
    return {
      date: new Date()
    }
  },
  computed: {
    time: function() {
      let hours=String(this.date.getHours()).padStart(2,"0");
      let minutes = String(this.date.getMinutes()).padStart(2,"0");
      let seconds=String(this.date.getSeconds()).padStart(2,"0");
      return `${hours}:${minutes}:${seconds}`;
    }
  },
  mounted: function() {
    setInterval(() => {this.date=new Date()}, 1000);
  }
});