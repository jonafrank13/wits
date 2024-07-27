<template>
  <q-page class="flex flex-start column">
    <div class="flex column q-px-md">
      <h5 class="text-h5 text-center">Check your inbox</h5>
      <p class="text-body2 text-center">
        Verification code sent to test@testing.com . Enter code to verify
      </p>
      <div class="flex row justify-evenly no-wrap">
        <q-input class="col q-mx-sm" dense v-model="v1" />
        <q-input class="col q-mx-sm" dense v-model="v2" />
        <q-input class="col q-mx-sm" dense v-model="v3" />
        <q-input class="col q-mx-sm" dense v-model="v4" />
      </div>
      <q-btn
        class="q-my-lg q-px-lg self-center"
        rounded
        unelevated
        color="black"
        label="Verify"
        @click="$router.push({ name: 'Know' })"
      />
      <p class="text-body2 text-center">
        Didn't reveive it ? Check spam inbox or
      </p>
      <q-btn
        class="q-my-lg q-px-lg self-center"
        rounded
        unelevated
        color="secondary"
        label="Send again"
      />
      <p class="text-body2 text-center">Still got trouble?</p>
      <p class="text-caption text-center text-primary">
        Get help | Try another email
      </p>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "VerifyPage",
});

const persist = ref(false);
</script>
