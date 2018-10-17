<template>
  <div>
    <h1>Dashboard view</h1>
    <h2>{{$route.params.id}}</h2>
    <dashboard-graph v-bind:dbData="{'weight':'85kg'}"></dashboard-graph>
    <dashboard-controls/>
  </div>
</template>

<script>
  import DashboardControls from '../components/DashboardControls.vue'
  import Graph from '../components/Graph.vue'

  export default{
    components: {
      "dashboard-controls":DashboardControls,
      "dashboard-graph":Graph
    },
    methods:{
      updateDashboard:function(){
        alert("The dashboard was updated from the Dashboard component");
      }
    }
  }
</script>
