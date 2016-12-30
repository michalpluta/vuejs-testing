<template>
  <div id="">

    <!--<header v-if="$store.state.showHeader">-->
    <view-header></view-header>


    <div>
      {{showHeader}}
      <!--<button @click="show">+</button>-->
      <!--<button @click="hide">-</button>-->
      <router-view></router-view>
    </div>

  </div>

</template>

<script>

    import viewHeader from './app/Header.vue'

    export default{

      components: {
        viewHeader
      },

      data(){
          return{
              msg:'hello vue'
          }
      },

      methods: {
        onChildMsg: () => {
          console.log('dsadaadas');
        }
      }

    }
</script>
