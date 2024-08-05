<template>
  <q-page class="flex flex-start column bg-white">
    <template v-if="chat">
      <q-list class="rounded-borders">
        <q-item-label class="text-center text-bold text-h6" header
          >Chats</q-item-label
        >

        <q-item clickable @click="chat = false" v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">John Wang</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">John</span>
              -- Hope your doubt is clarified?
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 1 min ago </q-item-section>
        </q-item>

        <q-separator inset="item" />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Janet Kong</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Janet</span>
              -- Can we schedule a call for tomorrow?
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 3 min ago </q-item-section>
        </q-item>

        <q-separator inset="item" />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Dave Larry</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Me</span>
              -- Thank you so much
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 7 min ago </q-item-section>
        </q-item>

        <q-separator inset="item" />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Mary Singh</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Mary</span>
              -- Awesome work
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 1 day ago </q-item-section>
        </q-item>
      </q-list>
    </template>
    <template v-else>
      <h6 class="text-h6 text-center text-bold">John Wong</h6>
      <div class="q-mx-md q-mb-xl">
        <q-chat-message
          name="me"
          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
          :text="['hey, how are you?']"
          stamp="7 minutes ago"
          sent
          bg-color="amber-7"
        />
        <q-chat-message
          name="John Wong"
          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
          :text="[
            'doing fine, how r you?',
            'I am trying to figure out the perimeter of a triangle',
          ]"
          size="6"
          stamp="4 minutes ago"
          text-color="white"
          bg-color="primary"
        />
        <q-chat-message
          name="John Wong"
          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
          :text="['Can you help?']"
          stamp="1 minutes ago"
          size="8"
          text-color="white"
          bg-color="primary"
        />
        <q-chat-message
          name="John Wong"
          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
          text-color="white"
          bg-color="primary"
        >
          <q-spinner-dots size="2rem" />
        </q-chat-message>
      </div>
      <q-input class="q-mt-xl q-mx-md flex-end" rounded outlined v-model="text">
        <template v-slot:append>
          <q-icon name="mic" class="cursor-pointer" />
          <q-icon name="photo_camera" class="cursor-pointer" />
        </template>
        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>
    </template>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "ChooseSignupPage",
});

const chat = ref(true);
</script>
