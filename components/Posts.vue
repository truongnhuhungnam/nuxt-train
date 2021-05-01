<template>
    <div class="Posts m-5">
        <ul>
            <li
                v-for="post in posts"
                :key="post.id"
                class="Post border-b-2 border-fuchsia-600 p-2"
            >
                <nuxt-link
                    :to="'posts/' + post.id"
                    class="text-blue-400 hover:underline"
                >
                    <h3 class="text-xl">{{ post.title }}</h3>
                    <p>{{ post.body }}</p>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Posts',
    data() {
        return {
            posts: [],
        }
    },
    async fetch() {
        this.posts = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        ).then((response) => response.json())
    },
    fetchOnServer: false,
}
</script>
