<template>

  <div class="auth">
    <h1>
      This is The LoginPAGE!!
    </h1>

    <form>
      <input type="text">
      <input type="password">
      <input type="submit">
    </form>
  </div>


</template>

<script>

    export default{
    data(){
            return{
                msg:'login vue',
                logged: false
            }
        }

    }
</script>
