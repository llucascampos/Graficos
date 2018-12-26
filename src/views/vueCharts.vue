<template>
    <div>
        <h1>Charts</h1>
         <v-layout align-center justify-space-between row>
            <v-flex xs5>
                <v-card>
                    <v-card-title>Linha</v-card-title>
                    <chartjs-line  :chart-data=" datacollection"></chartjs-line>
                </v-card>
            </v-flex>
            <v-flex xs5>
                <v-card>
                    <v-card-title>Barra</v-card-title>
                    <chartjs-bar :labels="labels" :data="datasets" :bind="true"></chartjs-bar>
                </v-card>
            </v-flex>
        </v-layout>
         <v-layout row pt-5>
            <v-flex xs5>
                <v-card>
                    <v-card-title>Radar</v-card-title>
                  <chartjs-radar :labels="labels" :data="datasets" :bind="true" ></chartjs-radar>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
      data () {
      return {
          datacollection: {
          labels: ['nome 1', 'nome2', 'nome 3'],
          datasets: [
            {
              label: 'meus dados',
              backgroundColor: 'blue',
              data: [50, 100, 30]
            }, {
              label: 'meus dados',
              backgroundColor: '#f87979',
               data: [30, 10, 80]
            }
          ]
        }
      }
    }

}
</script>

<style>

</style>
