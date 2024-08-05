<template>
  <q-page class="flex flex-start content-center column bg-primary">
    <h5 class="text-h5 text-center text-bold text-secondary q-ma-md">
      Book a session!
    </h5>
    <template v-if="!confirmed">
      <q-date v-model="date" :events="events" today-btn />
      <div class="flex row justify-between items-center q-my-sm">
        <div class="flex-shrink col-2"><b>Time</b></div>
        <div class="flex row justify-between col">
          <q-btn
            unelevated
            no-caps
            color="accent"
            text-color="white"
            label="9am-11am"
            :outline="b1"
            @click="b1 = !b1"
          />
          <q-btn
            unelevated
            no-caps
            color="accent"
            text-color="white"
            label="1pm-2pm"
            :outline="b2"
            @click="b2 = !b2"
          />
        </div>
      </div>
      <p class="q-mb-lg text-bold">Price $20</p>
      <div class="flex row justify-between">
        <q-btn
          unelevated
          rounded
          no-caps
          color="secondary"
          text-color="white"
          label="Message Tutor"
        />
        <q-btn
          unelevated
          rounded
          no-caps
          color="secondary"
          text-color="white"
          label="Confirm Booking"
          @click="confirmed = true"
        />
      </div>
    </template>
    <template v-else>
      <div
        style="border-radius: 20px"
        class="bg-accent q-pa-md text-bold text-white q-mb-xl q-mt-xl"
      >
        Notice: Booking Successfully Confirmed
      </div>
      <div class="flex column q-mt-xl">
        <q-btn
          unelevated
          rounded
          no-caps
          color="secondary"
          label="Book more Sessions"
          class="q-my-sm q-mx-sm q-pa-md text-white"
        />
        <q-btn
          unelevated
          rounded
          no-caps
          color="secondary"
          label="Go to bookings page"
          class="q-my-sm q-mx-sm q-pa-md text-white"
          @click="$router.push({ name: 'Session' })"
        />
        <q-btn
          unelevated
          rounded
          no-caps
          color="secondary"
          label="Return to home page"
          class="q-my-sm q-mx-sm q-pa-md text-white"
        />
      </div>
    </template>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
defineOptions({
  name: "BookSessionPage",
});

const date = ref("2024/08/07");
const events = [
  "2024/08/01",
  "2024/08/05",
  "2024/08/06",
  "2024/08/09",
  "2024/08/23",
];
const b1 = ref(false);
const b2 = ref(false);
const confirmed = ref(false);
</script>
