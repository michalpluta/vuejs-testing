<template>
  <div id="">

    <!--<header v-if="$store.state.showHeader">-->
      <header v-if="this.showHeader">
      <view-header></view-header>
    </header>

    <div>
      {{msg}}
      <!--<button @click="show">+</button>-->
      <!--<button @click="hide">-</button>-->
      <router-view></router-view>
    </div>

  </div>

</template>

<script>

    import viewHeader from './app/Header.vue'

    export default{
        ready(){

        console.log('sieaaasadas');
            this.dupa = window.localStorage.getItem('showHeader');
            console.log(this.dupa);
         },

        components: {
          viewHeader
        },

        data(){
            return{
                msg:'hello vue',
                dupa: 'elo'
            }
        },
        methods: {


        }

    }
</script>
