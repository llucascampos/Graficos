<script>
  //Importando o modelo de grafico 
  import {Bar, mixins} from 'vue-chartjs'
   const { reactiveProp } = mixins
  //Exportando
  export default{
      extends: Bar, 
       mixins: [reactiveProp],
    data () {
      return {
        
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true,
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
    //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.chartData, this.options)
    }
  }
</script>