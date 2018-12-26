<script>
  //importando grafico de barra e mixins para reatividade
  import {Bar, mixins} from 'vue-chartjs'
  //Getting the reactiveProp mixin from the mixins module.
  const { reactiveProp } = mixins
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
                display: true
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
      // this.chartData é  passado atravez de props do component pai
      this.renderChart(this.chartData, this.options)
    }
  }
</script>