<template>
  <div id="app">
  <v-app id="inspire">
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/10/08/150959.jpg"
        height="400px"
      ></v-img>
  
      <v-card-title>
        FIFA CLub world cup is one the most popular tourments.
      </v-card-title>
  
      <v-card-subtitle>
        By: Jameward Brown
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
        >
          More
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="6"
      ></v-pagination>
    </div>
  </v-app>
    <v-app id="inspire">
    
  </v-app>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>