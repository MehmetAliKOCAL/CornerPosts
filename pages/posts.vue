<script setup>
import Swal from "sweetalert2";
import posts from "/utilities/posts.js";
definePageMeta({
  layout: "posts",
});

if (posts.messageToShow != "") {
  Swal.fire({
    title: posts.messageToShow,
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: "2500",
    background: "#1BA31F",
    color: "white",
  });
  posts.messageToShow = "";
}
</script>
<template>
  <NuxtPage />
</template>
