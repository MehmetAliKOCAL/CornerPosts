<script setup>
import Swal from "sweetalert2";
import posts from "/utilities/posts.js";
const allPosts = posts.allPosts;
const post = reactive({
  title: "",
  subtitle: "",
  summary: "",
  content: "",
});

function createThePost() {
  allPosts.unshift(post);
  posts.messageToShow = "Post Created Successfully";
  navigateTo("/posts");
}
</script>
<template>
  <div class="flex flex-col max-w-[400px] mx-auto py-20 px-6">
    <legend class="text-2xl font-semibold">Create a New Corner Post</legend>
    <label class="mt-2 font-semibold" for="title">Post Title</label>
    <input
      v-model="post.title"
      class="border-1 border-black rounded-md px-3 py-1 outline-none focus:border-sky-500 hover:border-sky-500 transition-colors duration-300"
      id="title"
      type="text"
    />
    <label class="mt-2 font-semibold" for="subtitle">Post Subtitle</label>
    <input
      v-model="post.subtitle"
      class="border-1 border-black rounded-md px-3 py-1 outline-none focus:border-sky-500 hover:border-sky-500 transition-colors duration-300"
      id="subtitle"
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
  </div>
</template>
