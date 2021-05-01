<template>
    <div>
        <AppHeader />
        <div class="container mx-auto p-8">
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
