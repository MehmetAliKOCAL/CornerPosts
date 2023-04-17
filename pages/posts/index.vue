<script setup>
import posts from "/utilities/posts.js";
</script>
<template>
  <section class="px-6 max-w-[1400px] mx-auto my-10">
    <h2 class="font-bold text-xl">All Posts</h2>
    <p class="text-slate-400 font-medium mb-10">
      Currently {{ posts.allPosts.length }} posts available
    </p>
    <div class="flex flex-wrap gap-2">
      <Cards :admin="false" />
    </div>
  </section>
</template>
