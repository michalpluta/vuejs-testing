<template>

  <ul>
    <li><router-link to="hello">Hello</router-link></li>
    <li><router-link to="/">Home</router-link></li>
  </ul>

</template>

<script>
    export default{
      data(){
          return{
              msg:'hello vue'
          }
      }
    }
</script>
