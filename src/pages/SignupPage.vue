<template>
  <q-page class="flex flex-start column">
    <div class="flex column q-px-md">
      <h4 class="text-h4 text-left text-bold">Sign up</h4>
      <q-input class="q-mt-sm" v-model="email" label="Email" />
      <q-input class="q-my-sm" v-model="password" label="Password" />
      <q-list>
        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label class="q-mx-none"
              >I want to stay logged-in</q-item-label
            >
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="blue" v-model="persist" size="xl" />
          </q-item-section>
        </q-item>
      </q-list>
      <q-btn
        class="q-my-lg q-py-sm q-px-xl self-end"
        rounded
        unelevated
        no-caps
        color="black"
        label="Signup"
        @click="$router.push({ name: 'Verify' })"
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
