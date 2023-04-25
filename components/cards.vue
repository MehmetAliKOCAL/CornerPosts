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
    :class="[
      props.admin != true
        ? 'cursor-pointer hover:scale-[0.97] active:scale-100 transition-all duration-200'
        : 'cursor-default',
    ]"
    class="border-1 border-black/30 rounded-[4px] w-[250px] max-w-[250px] max-[825px]:max-w-full max-[825px]:w-full p-5 h-fit"
  >
    <h1 class="font-medium text-lg w-full max-w-[250px] h-[56px] line-clamp-2">
      {{ post.title }}
    </h1>
    <p class="font-semibold text-sm h-[96px] line-clamp-4">
      {{ post.summary }}
    </p>
    <NuxtLink
      v-if="props.admin == false"
      :to="`/postDetails/${post.id}`"
      class="inline-block text-sky-500 border-1 border-sky-500 font-medium rounded-md px-4 py-1 mt-4 hover:bg-sky-500 hover:text-white transition-all duration-300"
    >
      Read More
    </NuxtLink>
    <div v-else class="space-x-2">
      <NuxtLink
        :to="`/edit/${post.id}`"
        class="inline-block text-indigo-500 border-1 border-indigo-500 font-medium rounded-md px-4 py-1 mt-4 hover:bg-indigo-500 hover:text-white transition-all duration-300"
      >
        Edit
      </NuxtLink>
      <button
        @click="deletePost(post.id)"
        class="text-red-500 border-1 border-red-500 font-medium rounded-md px-4 py-1 mt-4 hover:bg-red-500 hover:text-white transition-all duration-300"
      >
        Delete
      </button>
    </div>
  </div>
</template>
