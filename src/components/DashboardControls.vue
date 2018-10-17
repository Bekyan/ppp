<template>
  <div id="dashboard-controls">
    <button v-on:click="updateDashboard">Update</button>
    <button v-on:click="deleteDashboard">Delete</button>
  </div>
</template>

<script>
  export default{
    methods:{
      updateDashboard:function(){
        alert("The dashboard was updated from Dashboard Controls component");
      },
      deleteDashboard:function(){
        alert("The dashboard was deleted from Dashboard Controls component");
      }
    }
  }
</script>
