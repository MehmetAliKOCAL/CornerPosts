<script setup>
definePageMeta({
  layout: "admin",
});
</script>
<template>
  <section
    class="px-6 max-w-[1400px] mx-auto my-10 flex flex-col min-h-[80vh] justify-center"
  >
    <NuxtLink
      to="/create"
      class="border-1 border-black/40 rounded-md py-1 px-6 mb-4 mx-auto transition-colors duration-300 hover:bg-black hover:text-white"
    >
      Create a New Post
    </NuxtLink>
    <div class="flex flex-wrap justify-center gap-2">
      <Cards :admin="true" />
    </div>
  </section>
</template>
