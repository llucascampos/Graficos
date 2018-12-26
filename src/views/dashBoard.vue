<template>
    <div>
        <h1>personagens</h1>
        <v-card>
            <v-card-title>Barra</v-card-title>
            <bar-chart :chart-data="dados" />
        </v-card>
        
{{personagens[0].films.length}}
        
        
    </div>
</template>

<script>
import BarChart from '@/components/chartjs/BarChart'
import axios from 'axios'
export default {
     components: {
         BarChart
    },

    data(){
        return{
            personagens: [],
            
             
             dados: {
                labels: ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa', 'Owen Lars', 'Beru Whitesun lars', 'R5-D4', 'Biggs Darklighter', 'Obi-Wan Kenobi'],
                datasets: [
                    {
                        label: 'Filmes',
                        backgroundColor: "rgba(38, 185, 154, 0.31)",
                        pointBorderColor: "rgba(38, 185, 154, 0.7)",
                        pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointBorderWidth: 0,
                        // Datos para o eixo Y
                        data: [0,0,0,0]
                    }
                ]
            }
        }
    },

    methods:{
          loadPerssonagens() {
            const url = 'https://swapi.co/api/people'
            axios.get(url).then(res => {
                this.personagens = res.data.results
                console.log(this.personagens)
               
            })
        },
    },
    
    mounted(){
        this.loadPerssonagens()
    }

}
</script>

<style>

</style>
