<template>
  <q-page class="flex flex-start content-center column bg-white">
    <h4 class="text-h4 text-center text-bold text-secondary">Your Account</h4>
    <template v-if="planView">
      <h4 class="text-h4 text-left text-bold text-secondary q-ma-none q-ml-md">
        Basic Student Plan :
      </h4>
      <div class="flex row q-mx-md justify-between q-my-sm">
        <q-btn
          unelevated
          rounded
          class="text-black"
          color="positive"
          label="Active"
        />
        <q-btn
          unelevated
          rounded
          no-caps
          color="grey-4"
          class="text-black"
          label="Switch to tutor plan"
        />
      </div>
      <h6 class="text-h6 text-left text-bold text-grey-8 q-ma-none q-ml-md">
        Your Wits Streak :
      </h6>
      <h4 class="text-h4 text-left text-bold text-secondary q-ma-none q-ml-md">
        20 <q-icon name="bolt" color="black" size="2rem" />
      </h4>
      <q-slider
        class="q-mt-xl q-px-md"
        v-model="model"
        color="primary"
        markers
        :marker-labels="fnMarkerLabel"
        :min="0"
        :max="5"
      />
      <div class="rounded-corners q-ma-md q-py-md q-px-lg bg-grey-4">
        <p class="text-bold text-caption">
          Rewards you can get with your streak
        </p>
        <p class="text-bold text-caption">
          10 <q-icon name="bolt" color="black" size="1rem" /> $2 Discount
          voucher
        </p>
        <p class="text-bold text-caption">
          20 <q-icon name="bolt" color="black" size="1rem" /> $5 Discount
          voucher
        </p>
        <p class="text-bold text-caption">
          30 <q-icon name="bolt" color="black" size="1rem" /> $10 Discount
          voucher
        </p>
        <p class="text-bold text-caption">
          40 <q-icon name="bolt" color="black" size="1rem" /> $15 Discount
          voucher
        </p>
        <p class="text-bold text-caption">
          50 <q-icon name="bolt" color="black" size="1rem" /> Free 2 hour lesson
        </p>
      </div>
      <h6 class="text-h6 text-left text-bold text-grey-8 q-ma-none q-ml-md">
        Your Rewards :
      </h6>
      <div class="rounded-corners q-ma-md q-py-md q-px-lg bg-grey-4">
        <p class="text-caption text-weight-bold">Click to find out more</p>
        <div class="rounded-corners q-ma-md q-py-md q-px-lg bg-white">
          <p class="text-bold text-caption">Enjoy a $2 off any session</p>
          <p
            class="text-caption text-right text-italic text-weight-thin text-black q-ma-none"
          >
            Expires 31 Dec 2024
          </p>
        </div>
      </div>
      <h4 class="text-h4 text-center text-bold text-secondary">
        Premium Packages
      </h4>
      <h6 class="text-h6 text-left text-bold text-grey-8 q-ma-none q-ml-md">
        Discount Package 1
      </h6>
      <ul>
        <li>10 x $2 discount voucher</li>
        <li>2 x $5 discount voucher</li>
      </ul>
      <q-btn
        unelevated
        rounded
        class="text-black text-bold q-mx-md"
        color="primary"
        label="$19.20"
      />
      <h6 class="text-h6 text-left text-bold text-grey-8 q-ma-none q-ml-md">
        Discount Package 2
      </h6>
      <ul>
        <li>15 x $2 discount voucher</li>
        <li>3 x $5 discount voucher</li>
      </ul>
      <q-btn
        unelevated
        rounded
        class="text-black text-bold q-mx-md q-mb-xl"
        color="primary"
        label="$34.90"
      />
    </template>
    <template v-else>
      <p class="text-bold text-grey-8" @click="planView = true">
        Profile: <u>Purchases and Account Plan</u>
      </p>
      <p class="text-bold text-grey-8">
        History: <u>Sessions for current month</u>
      </p>
      <p class="text-bold text-grey-8">
        Help: <u>Frequently asked questions </u>
      </p>
    </template>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
defineOptions({
  name: "ChooseSignupPage",
});
const planView = ref(false);
const model = ref(2);
const fnMarkerLabel = (val) => `${10 * val}`;
</script>
