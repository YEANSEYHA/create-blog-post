<template>
<div class="layout-ant">
    <HeaderAntdv/>
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
.layout-ant{
    background-color: #e5e5e5;
    height: 100vh;
}
</style>