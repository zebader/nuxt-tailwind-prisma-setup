<template>
  <h1 class="text-3xl font-bold text-lime-500">
    {{ user && user.username ? user.username : "Users!" }}
  </h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet
    vestibulum dictum. Nam condimentum ullamcorper velit et posuere. Donec
    finibus tempus lacinia.
  </p>
</template>
<script lang="ts" setup>
definePageMeta({ layout: "full" });
const user = useState("user").value;
</script>
