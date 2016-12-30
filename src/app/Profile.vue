<template>

  <div>
    <h1>
      This is The Profile Page dla numeru {{this.$route.params.userId}}
    </h1>

  </div>

</template>

<script>

    export default{

      data(){
        return {
          hello: 'Hello Profile!',
          users: []
        };
      },


      created(){

        console.log(this.$route.params.userId);

        this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          this.users = response.data;
        });
      }



    }
</script>
