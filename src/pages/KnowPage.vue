<template>
  <q-page class="flex justify-between column">
    <div>
      <h5 class="text-h5 text-center">Getting to know you</h5>
      <h4
        class="text-h4 text-center text-grey"
        v-html="questions[qIndex].question"
      ></h4>
      <div class="flex column">
        <q-btn
          v-for="option in questions[qIndex].options"
          :key="option"
          unelevated
          rounded
          color="primary"
          :label="option"
          class="q-ma-sm"
          @click="moveQuestion"
        />
      </div>
    </div>
    <div class="flex column">
      <q-btn
        class="q-mx-md q-my-sm"
        rounded
        unelevated
        color="primary"
        label="Next"
        icon-right="forward"
      />
      <q-btn
        class="q-mx-md q-my-sm"
        rounded
        unelevated
        color="secondary"
        label="Skip"
        icon-right="skip_next"
        @click="$router.push({ name: 'Signup' })"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

defineOptions({
  name: "KnowPage",
});

const qIndex = ref(0);
const questions = ref([
  {
    question: "Where are you learning from?",
    options: ["Singapore", "Malaysia", "China", "India", "Japan", "Thailand"],
  },
  {
    question: "You are a",
    options: ["Student", "Parent", "Adult", "Others"],
  },
  {
    question: "What level are you currently studying at",
    options: [
      "Primary School",
      "Secondary School",
      "Junior College",
      "Millenia Instituition",
      "Polytechnic",
      "University",
      "Others",
    ],
  },
  {
    question: "What year are you in ?",
    options: ["Junior College 1", "Junior College 2", "Others"],
  },
  {
    question: "What subjects do you face difficulties in?",
    options: [
      "Science",
      "Math",
      "Humanities",
      "English",
      "Mother tongue",
      "Others",
    ],
  },
]);

const moveQuestion = () => {
  if (qIndex.value < questions.value.length - 1) {
    qIndex.value++;
  } else {
    router.push({ name: "Landing" });
  }
};
</script>
