import Vue from 'vue';

const vmA = Vue.component('my-component', {

  template: '<div>A custom component!</div>',
  methods: {
    created() {
      console.log('test');
    }
  }
});

export default vmA;
