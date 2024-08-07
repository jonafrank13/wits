<template>
  <q-page class="flex flex-start content-center column bg-primary">
    <h4 class="text-h4 text-center text-bold text-secondary">Session</h4>
    <img
      style="margin-left: auto; margin-right: auto"
      width="90%"
      src="../assets/Session.png"
    />
    <q-btn
      unelevated
      color="accent"
      icon="insert_link"
      no-caps
      href="https://meet.google.com/mhr-cibw-fjp"
      target="_blank"
      class="q-my-md"
      label="Open Meeting"
    />
    <q-input
      v-model="textareaModel"
      standout
      stack-label
      type="textarea"
      label="Session Notes"
      :shadow-text="textareaShadowText"
      @keydown="processTextareaFill"
      @focus="processTextareaFill"
      class="q-mt-md bg-white"
    />
  </q-page>
</template>

<script setup>
defineOptions({
  name: "SessionPage",
});
</script>
