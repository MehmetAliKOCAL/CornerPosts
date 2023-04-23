<script setup>
import Swal from "sweetalert2";
import { usePostsStore } from "/store/posts.js";
const postsStore = usePostsStore();
const allPosts = await postsStore.getAllPosts();

function postCount() {
  if (allPosts.length === 1) return "Currently 1 post available";
  else return `Currently ${allPosts.length} posts available`;
}

if (postsStore.messageToShow != "") {
  Swal.fire({
    title: postsStore.messageToShow,
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: "2500",
    background: "#1BA31F",
    color: "white",
  });
  postsStore.messageToShow = "";
}
</script>

<template>
  <section class="px-6 max-w-[1400px] min-h-[35vh] mx-auto my-10">
    <h2 class="font-bold text-xl">All Posts</h2>
    <p class="text-slate-400 font-medium mb-10">
      {{ postCount() }}
    </p>
    <div class="flex flex-wrap gap-2">
      <Cards :admin="false" />
    </div>
  </section>
</template>
