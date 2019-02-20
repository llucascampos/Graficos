<template>
    <div>
        <h1>Chartjs</h1>
        <v-layout align-center justify-space-between row>
            <v-flex xs5>
                <v-card>
                    <v-card-title>Linha</v-card-title>
                    <line-chart style="width:300px; height:500px"/>
                </v-card>
            </v-flex>
            <v-flex xs5>
                <v-card>
                    <v-card-title>Barra</v-card-title>
                    <bar-chart  :chart-data="dados" style="width:300px; height:400px"></bar-chart>
                </v-card>
            </v-flex>
        </v-layout>
         <v-layout row pt-5>
            <v-flex xs5>
                <v-card>
                    <v-card-title>Reactive</v-card-title>
                    <reactive :chart-data="dados"></reactive> 
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import LineChart from '@/components/chartjs/LineChart'
import BarChart from '@/components/chartjs/BarChart'
import Reactive from '@/components/chartjs/Reactive'
export default {
    components: {
        LineChart, BarChart, Reactive
    },

    data(){
        return{
            dados: {
                labels: ['mes 1', 'mes 2', 'mes 3'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: "rgba(38, 185, 154, 0.31)",
                        pointBorderColor: "rgba(38, 185, 154, 0.7)",
                        pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointBorderWidth: 0,
                        // Datos para o eixo Y
                        data: [52, 42, 86, 95]
                    }
                ]
            }
        }
            
    },        
    

}
</script>

<style>

</style>
