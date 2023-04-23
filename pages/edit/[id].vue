<script setup>
import { usePostsStore } from "/store/posts";
const postsStore = usePostsStore();
const postID = useRoute().params.id;
const post = await postsStore.getPost(postID);
const editedPost = reactive({
  title: "",
  summary: "",
  content: "",
});

async function update() {
  postsStore.updatePost(postID, editedPost);
  postsStore.messageToShow = "Post Updated Successfully";
  navigateTo(`/postDetails/${postID}`);
}
</script>
<template>
  <section class="flex flex-col max-w-[400px] mx-auto py-10 px-6">
    <h1 class="text-2xl font-semibold">Edit the Corner Post</h1>
    <label class="mt-2 font-semibold" for="title">Post Title</label>
    <input
      v-model="editedPost.title"
      class="border-1 border-black rounded-md px-3 py-1 outline-none focus:border-sky-500 hover:border-sky-500 transition-colors duration-300"
      id="title"
      type="text"
      :placeholder="post?.title"
    />
    <label class="mt-2 font-semibold" for="summary">Post Summary</label>
    <input
      v-model="editedPost.summary"
      class="border-1 border-black rounded-md px-3 py-1 outline-none focus:border-sky-500 hover:border-sky-500 transition-colors duration-300"
      id="summary"
      type="text"
      :placeholder="post?.summary"
    />
    <label class="mt-2 font-semibold" for="content">Post Content</label>
    <textarea
      v-model="editedPost.content"
      class="border-1 border-black rounded-md px-3 py-1 outline-none focus:border-sky-500 hover:border-sky-500 transition-colors duration-300"
      id="content"
      type="text"
      :placeholder="post?.content"
      rows="5"
    />
    <div class="mt-3 space-x-2">
      <NuxtLink
        to="/"
        class="hover:bg-red-500 hover:text-white text-red-500 border-1 border-red-500 px-6 py-1 rounded-md transition-colors duration-300 inline-block"
      >
        Cancel
      </NuxtLink>
      <button
        @click="update()"
        type="submit"
        class="hover:bg-black hover:text-white border-1 border-black px-6 py-1 rounded-md transition-colors duration-300"
      >
        Update
      </button>
    </div>
  </section>
</template>
