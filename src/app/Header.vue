<template>

  <header>
    <ul>
      <li><router-link :to="{name: 'hello'}">Hello</router-link></li>
      <li><router-link :to="{name: 'home'}" >Home</router-link></li>
      <li><router-link :to="{name: 'login'}" >Login</router-link></li>
    </ul>
  </header>


</template>

<script>

    export default{
      created() {
        this.showHeader = window.localStorage.getItem('showHeader');
        //console.log(this.showHeader);
      },

      data(){
          return{
              msg: 'hello vue'
          }
      }
    }
</script>
