<script setup>
import { usePostsStore } from "/store/posts.js";
const postsStore = usePostsStore();
const post = reactive({
  title: "",
  summary: "",
  content: "",
});

function createThePost() {
  postsStore.createPost(post);
  postsStore.messageToShow = "Post Created Successfully";
  navigateTo("/");
}
</script>
<template>
  <section class="flex flex-col max-w-[400px] mx-auto py-20 px-6">
    <legend class="text-2xl font-semibold">Create a New Corner Post</legend>
    <label class="mt-2 font-semibold" for="title">Post Title</label>
    <input
      v-model="post.title"
      class="border-1 border-black rounded-md px-3 py-1 outline-none focus:border-sky-500 hover:border-sky-500 transition-colors duration-300"
      id="title"
      type="text"
    />
    <label class="mt-2 font-semibold" for="summary">Post Summary</label>
    <input
      v-model="post.summary"
      class="border-1 border-black rounded-md px-3 py-1 outline-none focus:border-sky-500 hover:border-sky-500 transition-colors duration-300"
      id="summary"
      type="text"
    />
    <label class="mt-2 font-semibold" for="content">Post Content</label>
    <textarea
      v-model="post.content"
      class="border-1 border-black rounded-md px-3 py-1 outline-none focus:border-sky-500 hover:border-sky-500 transition-colors duration-300"
      id="content"
      type="text"
      rows="5"
    />
    <div class="w-full flex gap-2">
      <NuxtLink
        to="/admin"
        type="submit"
        class="w-full text-center text-red-500 hover:text-white border-1 border-red-500 px-6 hover:bg-red-500 py-1 rounded-md mt-3 transition-colors duration-300"
      >
        Cancel
      </NuxtLink>
      <button
        @click="createThePost()"
        type="submit"
        class="bg-black text-white border-1 border-black px-6 py-1 rounded-md mt-3 hover:bg-green-500 hover:border-green-500 transition-colors duration-300 w-full"
      >
        Create
      </button>
    </div>
  </section>
</template>
