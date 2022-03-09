<template>
<div>
    <Nuxt/>
</div>
</template>

<script>
import antdui from '~/plugins/antd-ui.js'
export default {
    created(){
        antdui()
    }
}
</script>

<style>

</style>