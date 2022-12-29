<template>
  <h1 class="text-3xl font-bold text-lime-500">Hello world!</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet
    vestibulum dictum. Nam condimentum ullamcorper velit et posuere. Donec
    finibus tempus lacinia. Praesent nunc felis, rutrum at iaculis sed,
    tincidunt sed lectus. Donec nec mi mauris. Vestibulum aliquam, ipsum nec
    gravida bibendum, enim risus egestas lorem, vitae ullamcorper nulla velit
    vitae arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
    posuere cubilia curae;
  </p>
  <div class="col-span-6 sm:col-span-3">
    <label for="email" class="block text-sm font-medium text-gray-700"
      >Email</label
    >
    <input
      type="text"
      name="email"
      id="email"
      v-model="email"
      class="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
    <label for="email" class="block text-sm font-medium text-gray-700"
      >Username</label
    >
    <input
      type="text"
      name="username"
      id="username"
      v-model="username"
      class="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>

  <button
    class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 mt-5"
    @click="doCreateUser"
  >
    Create user
  </button>
  <button
    class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 mt-5"
    @click="getUser"
  >
    Check if user
  </button>

  <div>
    <p v-if="user && user.username">{{ user.username }}</p>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import { createUser, getUserByEmail } from "@/services/userServices";

const user: Ref<{} | null> = ref(null);
const email: Ref<string> = ref("");
const username: Ref<string> = ref("");

const doCreateUser = async () => {
  user.value = await createUser(username.value, "jose", email.value, "qwerty");
  await useRouter().push("/users");
};

const getUser = async () => {
  user.value = await getUserByEmail(email.value);
};
</script>
