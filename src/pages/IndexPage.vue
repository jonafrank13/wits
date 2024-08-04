<template>
  <q-page class="flex flex-center bg-primary column">
    <q-btn
      no-caps
      rounded
      unelevated
      size="35px"
      class="q-ma-xl q-px-xl q-py-xl cooper_italics text-accent bg-white"
      label="Start Teaching"
      @click="$router.push({ name: 'ChooseSignup' })"
    />
    <q-btn
      no-caps
      rounded
      unelevated
      size="35px"
      class="q-ma-xl q-px-xl q-py-xl cooper_italics text-secondary bg-white"
      label="Start Learning"
      @click="$router.push({ name: 'ChooseSignup' })"
    />
    <q-btn
      no-caps
      rounded
      unelevated
      size="35px"
      class="q-px-xl q-py-xs text-black"
      color="white"
      label="Login"
    />
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>
