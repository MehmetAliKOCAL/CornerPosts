<script setup>
import { usePostsStore } from "/store/posts.js";
const postsStore = usePostsStore();
const allPosts = await postsStore.getAllPosts();
allPosts.reverse();
const props = defineProps(["admin"]);

async function deletePost(postID) {
  postsStore.deletePost(postID);
  postsStore.messageToShow = "Post Deleted Successfully";
  navigateTo("/");
}
</script>

<template>
  <div
    @click="props.admin != true && navigateTo(`/postDetails/${post.id}`)"
    v-for="post in allPosts"
    :class="[props.admin != true ? 'cursor-pointer' : 'cursor-default']"
    class="border-2 border-black rounded-md w-[250px] max-w-[250px] max-[825px]:max-w-full max-[825px]:w-full p-5 h-fit"
  >
    <h1 class="font-bold text-lg w-full max-w-[250px] h-[56px] line-clamp-2">
      {{ post.title }}
    </h1>
    <p class="font-semibold h-[96px] line-clamp-4">
      {{ post.summary }}
    </p>
    <NuxtLink
      v-if="props.admin == false"
      :to="`/postDetails/${post.id}`"
      class="inline-block text-sky-500 border-2 border-sky-500 font-bold rounded-md px-4 py-1 mt-4 hover:bg-sky-500 hover:text-white transition-all duration-300"
    >
      Read More
    </NuxtLink>
    <div v-else class="space-x-2">
      <NuxtLink
        :to="`/edit/${post.id}`"
        class="inline-block text-yellow-500 border-2 border-yellow-500 font-bold rounded-md px-4 py-1 mt-4 hover:bg-yellow-500 hover:text-white transition-all duration-300"
      >
        Edit
      </NuxtLink>
      <button
        @click="deletePost(post.id)"
        class="text-red-500 border-2 border-red-500 font-bold rounded-md px-4 py-1 mt-4 hover:bg-red-500 hover:text-white transition-all duration-300"
      >
        Delete
      </button>
    </div>
  </div>
</template>
