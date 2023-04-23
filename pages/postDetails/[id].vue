<script setup>
import Swal from "sweetalert2";
import { usePostsStore } from "/store/posts";
const postsStore = usePostsStore();
const postID = useRoute().params.id;
let post = reactive(await postsStore.getPost(postID));

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
  <section
    class="my-10 max-w-[1400px] px-6 mx-auto min-h-[35vh] flex flex-col justify-center items-center"
  >
    <h1 class="font-bold text-3xl text-center">{{ post?.title }}</h1>
    <p class="text-lg text-gray-400 text-center mb-5">{{ post?.subtitle }}</p>
    <p class="text-lg">{{ post?.content }}</p>
    <div class="flex justify-center items-center mt-6">
      <NuxtLink
        to="/"
        class="py-2 px-10 text-sky-500 border-2 border-sky-500 rounded-md hover:text-white hover:bg-sky-500 transition-colors duration-300"
        >See All Posts</NuxtLink
      >
    </div>
  </section>
</template>
