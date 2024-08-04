<template>
  <q-page class="flex flex-start column">
    <h5 class="text-h5 text-center">Create an account</h5>
    <q-btn
      class="q-mx-md q-my-sm"
      rounded
      unelevated
      color="primary"
      label="Signup with apple"
      icon="fa-brands fa-apple"
    />
    <q-btn
      class="q-mx-md q-my-sm"
      rounded
      unelevated
      color="secondary"
      label="Continue with email"
      icon="email"
      @click="$router.push({ name: 'Signup' })"
    />
  </q-page>
</template>

<script setup>
defineOptions({
  name: "BookSessionPage",
});
</script>
