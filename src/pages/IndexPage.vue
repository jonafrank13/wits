<template>
  <q-page class="flex flex-center">
    <q-btn
      no-caps
      rounded
      unelevated
      size="35px"
      class="glossy q-px-xl q-py-xl"
      color="accent"
      label="Start Teaching"
    />
    <q-btn
      no-caps
      rounded
      unelevated
      size="35px"
      class="glossy q-px-xl q-py-xl"
      color="primary"
      label="Start Learning"
      @click="$router.push({ name: 'ChooseSignup' })"
    />
    <q-btn
      no-caps
      rounded
      unelevated
      size="35px"
      class="glossy q-px-xl q-py-xs"
      color="secondary"
      label="Login"
    />
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>
