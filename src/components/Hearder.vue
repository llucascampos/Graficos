<template>
    <div>
        <v-toolbar>
            <v-toolbar-title ><router-link to="/" style="text-decoration:none"> Gráficos </router-link></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/charts">charts</v-btn>
                <v-btn flat to="/chartjs">chartjs</v-btn>
                <v-btn flat to="/chartkick">chartkick</v-btn>
                 <v-btn flat to="/dashBoard">Star Wars</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
