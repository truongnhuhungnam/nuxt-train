<template>
    <div>
        <ul class="list-none md:list-disc">
            <li>User Id: {{ post.userId }}</li>
            <li>Id: {{ post.id }}</li>
            <li>Title: {{ post.title }}</li>
            <li>body: {{ post.body }}</li>
        </ul>
        <nuxt-link to="/posts" class="text-blue-400 hover:underline">
            Back to posts list
        </nuxt-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {},
        }
    },
    async fetch() {
        this.post = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        ).then((res) => res.json())
    },
    fetchOnServer: false,
}
</script>
