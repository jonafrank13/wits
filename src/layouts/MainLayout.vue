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

        <q-toolbar-title class="text-h2 text-center cooper_italics"
          ><i>w</i></q-toolbar-title
        >

        <q-btn flat dense round />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer v-if="!hideFooter" bordered>
      <q-tabs
        no-caps
        active-color="accent"
        indicator-color="secondary"
        class="text-secondary"
        v-model="tab"
        dense
        shrink
        align="justify"
        style="background: #ecf6fa"
      >
        <q-tab
          name="home"
          @click="$router.push({ name: 'Landing' })"
          icon="home"
          label="Home"
        />
        <q-tab
          name="tutors"
          @click="$router.push({ name: 'Session' })"
          icon="groups"
          label="Tutors"
        />
        <q-tab
          name="bookings"
          @click="$router.push({ name: 'BookSession' })"
          icon="calendar_today"
          label="Bookings"
        />
        <q-tab
          name="chat"
          @click="$router.push({ name: 'Chat' })"
          icon="chat_bubble_outline"
          label="Chat"
        />
        <q-tab
          name="account"
          @click="$router.push({ name: 'Account' })"
          icon="account_circle"
          label="Account"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

defineOptions({
  name: "MainLayout",
});

const tab = ref("home");

const hideFooter = computed(() => {
  console.log(route);
  return ["Index", "ChooseSignup", "Signup", "Verify", "Know"].includes(
    route.name
  );
});
</script>
