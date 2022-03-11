<template>
<div>
    <header>
        <div class="header-right">
            <nuxt-link class="sub-header" to="/" >Home</nuxt-link>
            <nuxt-link class="sub-header" to="/about" >About</nuxt-link>
            <nuxt-link class="sub-header" to="/admin/dashboard">Dashboard</nuxt-link>
            <nuxt-link class="sub-header" to="/auth/login">Login</nuxt-link>
        </div>
    </header>
</div>
</template>
<script>
export default {

}
</script>

<style scoped>
header{
    overflow: hidden;
    background-color: #e5e5e5;
    padding: 10px 10px;
}
.sub-header{
    float: left;
    color: black;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    font-size: 14px; 
    line-height: 16px;
    border-radius: 4px;
}
</style>