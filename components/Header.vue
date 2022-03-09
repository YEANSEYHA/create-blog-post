<template>
  <header class="title bg-orange-400 flex justify-between h-12 align-middle">
      
        <div class="m-4">
          <nuxt-link class=" text-primary" to="/">Home</nuxt-link>
          <nuxt-link class=" text-primary ml-2" to="/about">About</nuxt-link>
          <nuxt-link class=" text-primary ml-2" to="/admin/dashboard">Dashboard</nuxt-link>
        </div>

        <div class="m-4">
          <AppSearchInput />
        </div>
        
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>