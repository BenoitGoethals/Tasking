<template>
  <div class="small">

    <DoughnutChart  :chart-data="datacollection"></DoughnutChart>

  </div>
</template>

<script>
  import DoughnutChart from '../plugins/Doughnout'

  export default {
    components: {
      DoughnutChart
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
              backgroundColor: ['Red','Green','Blue','Yellow',],
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
