<template>
    <NuxtLink class="h-full" :to="`/blog/author/${author.name}`">
            <img :src="author.image" width="100px" />
            <div>
                <h4>Author</h4>
                <p>{{ author.name }}</p>
                <p>{{ author.bio }}</p>
            </div>
    </NuxtLink>
</template>

<script>
export default {

}
</script>

<style>

</style>