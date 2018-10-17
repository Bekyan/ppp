<template>
  <div>
    <h1>Start view</h1>
    <button id="authenticate" v-on:click="authenticate">Authenticate with Google</button>
    <button id="createDashboard" v-on:click="createDashboard">Create a new dashboard</button>
    <p>{{email}}</p>
  </div>
</template>

<script>
  import {authenticate} from '../services/auth'
  export default{
    data:function(){
      return {
        email: ''
      }
    },
    methods:{
      createDashboard:function() {
        let id = 1235132;
        this.$router.push({name: 'dashboard', params:{id}});
      },
      authenticate: function() {
        //var start = this;
        authenticate().then(function(result){
          console.log(result.email);
          //start.email = result.email;
        });
      }
    }
  }
</script>
