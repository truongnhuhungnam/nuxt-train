<template>
    <div class="Posts flex justify-center m-5">
        <ul class="w-1/2">
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
                    <truncate
                        clamp="..."
                        :length="100"
                        less="Show Less"
                        :text="post.body"
                    ></truncate>
                    <p class="text-right">by: {{ post.userId }}</p>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
import truncate from 'vue-truncate-collapsed'
export default {
    name: 'Posts',
    components: { truncate },
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
