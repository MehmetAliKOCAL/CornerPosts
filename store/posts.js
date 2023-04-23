import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    allPosts: [],
    currentPost: {},
    messageToShow: "",
    config: useRuntimeConfig(),
  }),
  actions: {
    async getAllPosts() {
      this.allPosts = await $fetch(`${this.config.FIREBASE_URL}.json`)
        .then((res) => {
          let allPosts = [];
          for (let key in res) {
            allPosts.push({ id: key, ...res[key] });
          }
          return allPosts;
        })
        .catch((error) => {
          console.error(error);
        });
      return this.allPosts;
    },

    async getPost(postID) {
      this.currentPost = await $fetch(
        `${this.config.FIREBASE_URL}/${postID}.json`
      ).catch((error) => {
        console.error(error);
      });
      return this.currentPost;
    },

    async updatePost(postID, updateDetails) {
      await $fetch(`${this.config.FIREBASE_URL}/${postID}.json`, {
        method: "PATCH",
        body: JSON.stringify(updateDetails),
      }).catch((error) => {
        console.error(error);
      });
    },

    async deletePost(postID) {
      await $fetch(`${this.config.FIREBASE_URL}/${postID}.json`, {
        method: "DELETE",
      }).catch((error) => {
        console.error(error);
      });
    },

    async createPost(post) {
      await $fetch(`${this.config.FIREBASE_URL}.json`, {
        method: "POST",
        body: JSON.stringify(post),
      }).catch((error) => {
        console.error(error);
      });
    },
  },
});
