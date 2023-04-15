<script setup>
import posts from "/utilities/posts.js";
const post = posts[useRoute().params.id];
</script>
<template>
  <section class="my-10 max-w-[1400px] px-6 mx-auto">
    <h1 class="font-bold text-3xl text-center">{{ post.title }}</h1>
    <p class="text-lg text-gray-400 text-center mb-5">{{ post.subtitle }}</p>
    <p class="text-lg">{{ post.content }}</p>
    <div class="flex justify-center items-center mt-6">
      <NuxtLink
        to="/posts"
        class="py-2 px-10 text-sky-500 border-2 border-sky-500 rounded-md hover:text-white hover:bg-sky-500 transition-colors duration-300"
        >See All Posts</NuxtLink
      >
    </div>
  </section>
</template>
