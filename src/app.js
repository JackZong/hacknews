import Vue from 'vue';
import Hello from 'components/Hello.vue'
new Vue({
  el: '#app',
  template: '<div><Hello></Hello></div>',
  components: {Hello}
})