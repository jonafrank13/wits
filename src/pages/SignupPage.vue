<template>
  <q-page class="flex flex-start column">
    <div class="flex column q-px-md">
      <h5 class="text-h5 text-left">Sign up</h5>
      <q-input class="q-mt-sm" v-model="email" label="Email" />
      <q-input class="q-my-sm" v-model="password" label="Password" />
      <q-toggle
        label="Keep me signed in"
        left-label
        class="q-my-sm"
        v-model="persist"
      />
      <q-btn
        class="q-my-lg q-px-lg self-end"
        rounded
        unelevated
        color="accent"
        label="Signup"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "SignupPage",
});

const persist = ref(false);
</script>
