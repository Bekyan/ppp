<template>
  <div id="dashboard-graph">
    <img src="http://fitorfold.com/wp-content/uploads/2012/09/WeightLoss_July26-Sep4_2012.png"></img>
    <p>Data received: {{dbData}}</p>
  </div>
</template>

<script>
  export default{
    props:{
      dbData:Object
    },
    methods:{
    }
  }
</script>
