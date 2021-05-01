<template>
    <div>
        <AppHeader></AppHeader>
        <div class="container mx-auto py-8">
            <Nuxt />
        </div>
    </div>
</template>
<script>
import AppHeader from '~/components/AppHeader.vue'
export default {
    components: { AppHeader },
}
</script>
