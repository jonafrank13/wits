<template>
  <q-page class="flex flex-start column">
    <div class="flex column q-px-md">
      <h4 class="text-h4 text-center text-bold q-mb-md">Check your inbox</h4>
      <p class="text-body2 text-center text-grey-10">
        Verification code sent to test@testing.com . Enter code to verify
      </p>
      <div class="flex row justify-evenly no-wrap">
        <q-input
          type="tel"
          mask="#"
          class="col q-mx-sm text-center"
          dense
          v-model="v1"
        />
        <q-input
          type="tel"
          mask="#"
          class="col q-mx-sm text-center"
          dense
          v-model="v2"
        />
        <q-input
          type="tel"
          mask="#"
          class="col q-mx-sm text-center"
          dense
          v-model="v3"
        />
        <q-input
          type="tel"
          mask="#"
          class="col q-mx-sm text-center"
          dense
          v-model="v4"
        />
      </div>
      <q-btn
        class="q-my-lg q-px-lg self-center"
        rounded
        unelevated
        no-caps
        color="black"
        label="Verify"
        @click="$router.push({ name: 'Know' })"
      />
      <p class="text-body2 text-center">
        Didn't reveive it ? Check spam inbox or
      </p>
      <q-btn
        class="q-mb-lg q-px-lg self-center"
        rounded
        unelevated
        color="accent"
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
const v1 = ref();
const v2 = ref();
const v3 = ref();
const v4 = ref();
</script>
