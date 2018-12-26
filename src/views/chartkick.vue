<template>
    <div>
        <h1>Chartkick</h1>
         <v-layout align-center justify-space-between row>
            <v-flex xs5>
                <v-card>
                    <v-card-title>Linha</v-card-title>
                   <line-chart :data="chartData" :download="true"></line-chart>
                </v-card>
            </v-flex>
            <v-flex xs5>
                <v-card>
                    <v-card-title>Barra</v-card-title>
                    <bar-chart :data="[['Work', 1322], ['Play', 1492]]" :download="true"></bar-chart>
                </v-card>
            </v-flex>
        </v-layout>
         <v-layout row pt-5>
            <v-flex xs5>
                <v-card>
                    <v-card-title>Dispersão</v-card-title>
                 <scatter-chart :data="[[174.0, 80.0], [176.5, 82.3], [180.3, 73.6]]" :download="true"></scatter-chart>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    data () {
      return {
        chartData: [['Jan', 44], ['Feb', 27], ['Mar', 60], ['Apr', 55], ['May', 37], ['Jun', 40], ['Jul', 69], ['Aug', 33], ['Sept', 76], ['Oct', 90], ['Nov', 34], ['Dec', 22]]
      }
    }

}
</script>

<style>

</style>
