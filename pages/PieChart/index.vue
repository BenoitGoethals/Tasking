<template>
  <div class="small">

    <PieChart :chart-data="datacollection"></PieChart>
  
  </div>
</template>

<script>
  import PieChart from '../../plugins/PieChart.js'

  export default {
    components: {
      PieChart
    },

    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        var ds=this.$store.getters.graphData;

        this.datacollection = {
          labels: ['Idle','Started','Onhold','Ended'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: ['#f11979','#f87949','#f87779','#f87179',],
              data: [ds.valueOf()[0].count,ds.valueOf()[1].count,ds.valueOf()[2].count,ds.valueOf()[3].count ]
            }
          ]
        }
      },




    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
