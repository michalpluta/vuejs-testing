<template>

  <div>
    <h1>{{ hello }}</h1>
    <p>DUPA</p>

    <ul>
      <li v-for="user in users">
        <!--<router-link to="{ name: 'profile', params: { userId: 123 }}">{{user.name}} {{user.id}}</router-link>-->

        <router-link :to="{ name: 'profile', params: { userId: user.id }}">User</router-link>

      </li>
    </ul>

  </div>

</template>

<script>

export default {

  data() {
    return {
      hello: 'Hello World!',
      users: []
    };
  },
  methods: {
  },

  created(){
    //console.log('created ran...');
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.users = response.data;
      });
  }

};
</script>
