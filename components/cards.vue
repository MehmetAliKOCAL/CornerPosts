<script setup>
import posts from "/utilities/posts.js";
const allPosts = posts.allPosts;
const props = defineProps(["admin"]);

function deletePost() {
  allPosts.splice(allPosts[useRoute().params.id], 1);
  posts.messageToShow = "Post Deleted Successfully";
  navigateTo("/posts");
}
</script>
<template>
  <div
    @click="
      props.admin != true && navigateTo(`/posts/${allPosts.indexOf(post)}`)
    "
    v-for="post in allPosts"
    :class="[props.admin != true ? 'cursor-pointer' : 'cursor-default']"
    class="border-2 border-black rounded-md w-[250px] max-w-[250px] max-[825px]:max-w-full max-[825px]:w-full p-5"
  >
    <h1 class="font-bold text-lg w-full max-w-[250px] line-clamp-2">
      {{ post.title }}
    </h1>
    <p class="text-gray-500 w-full max-w-[250px] line-clamp-1 mb-3">
      {{ post.subtitle }}
    </p>
    <p class="font-semibold h-[100px] line-clamp-4">
      {{ post.summary }}
    </p>
    <NuxtLink
      v-if="props.admin == false"
      :to="`/posts/${allPosts.indexOf(post)}`"
      class="inline-block text-sky-500 border-2 border-sky-500 font-bold rounded-md px-4 py-1 mt-4 hover:bg-sky-500 hover:text-white transition-all duration-300"
    >
      Read More
    </NuxtLink>
    <div v-if="props.admin" class="space-x-2">
      <NuxtLink
        :to="`/edit/${allPosts.indexOf(post)}`"
        class="inline-block text-yellow-500 border-2 border-yellow-500 font-bold rounded-md px-4 py-1 mt-4 hover:bg-yellow-500 hover:text-white transition-all duration-300"
      >
        Edit
      </NuxtLink>
      <button
        @click="deletePost()"
        class="text-red-500 border-2 border-red-500 font-bold rounded-md px-4 py-1 mt-4 hover:bg-red-500 hover:text-white transition-all duration-300"
      >
        Delete
      </button>
    </div>
  </div>
</template>
