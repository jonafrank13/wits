<template>
  <q-page class="flex flex-start column bg-white">
    <h4 class="text-h4 text-center text-bold">Create an account</h4>
    <q-btn
      class="q-mx-xl q-my-md q-py-md"
      rounded
      unelevated
      no-caps
      color="black"
      label="Continue with apple"
      icon="fa-brands fa-apple"
      @click="$router.push({ name: 'Signup' })"
    />
    <h4 class="text-h4 text-center text-bold q-my-md">Or</h4>
    <q-btn
      class="q-mx-xl q-my-md q-py-md"
      rounded
      unelevated
      no-caps
      color="accent"
      label="Continue with email"
      icon="email"
      @click="$router.push({ name: 'Signup' })"
    />
  </q-page>
</template>

<script setup>
defineOptions({
  name: "ChooseSignupPage",
});
</script>
