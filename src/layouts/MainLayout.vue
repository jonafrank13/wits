<template>
  <q-layout view="lHh lpR lFf">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="arrow_back"
          aria-label="back"
          @click="$router.back()"
        />

        <q-toolbar-title class="text-center">W</q-toolbar-title>

        <q-btn flat dense round />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs
        no-caps
        active-color="secondary"
        indicator-color="accent"
        class="text-white"
        v-model="tab"
      >
        <q-tab name="home" label="Home" />
        <q-tab name="bookings" label="Bookings" />
        <q-tab name="account" label="Account" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "MainLayout",
});

const tab = ref("home");
</script>
