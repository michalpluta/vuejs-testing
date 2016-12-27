<template>
  <div id="">

    <header v-if="logged">
      <view-header></view-header>
    </header>

    <div>
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
                msg:'hello vue',
                logged: true

            }
        }
    }
</script>
