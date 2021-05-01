<template>
    <div>
        <nav class="bg-white px-8 pt-2 shadow-md">
            <div class="-mb-px flex justify-center">
                <nuxt-link
                    to="/"
                    class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
                >
                    Home
                </nuxt-link>
                <nuxt-link
                    to="/about"
                    class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
                >
                    About
                </nuxt-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {}
</script>
<style>
.nuxt-link-exact-active {
    border-color: rgba(110, 231, 183, var(--tw-bg-opacity));
}
</style>
