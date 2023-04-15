<template>
  <header>
    <nav class="p-6 flex items-center justify-between max-w-[1400px] mx-auto">
      <div class="space-x-4">
        <NuxtLink to="/" class="text-xl font-bold">Corner Posts</NuxtLink>
        <NuxtLink
          to="/posts"
          class="font-semibold hover:text-sky-500 transition-colors duration-300"
          >View Posts</NuxtLink
        >
      </div>
      <NuxtLink
        to="/admin"
        class="font-semibold hover:text-sky-500 transition-colors duration-300"
        >Admin</NuxtLink
      >
    </nav>
  </header>
</template>
