<template>
  <v-container>
    <hearder />
    <router-view />
  </v-container>
</template>

<script>
import Hearder from './components/Hearder'

export default {
  name: 'App',
  components: {
    Hearder
  },
  data () {
    return {
      //
    }
  }
}
</script>
