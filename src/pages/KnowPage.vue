<template>
  <q-page class="flex justify-between column">
    <div>
      <h4 class="text-h4 text-bold text-center q-mb-sm">
        {{ qIndex > 0 ? "Getting to know you" : questions[qIndex].question }}
      </h4>
      <p
        v-if="qIndex > 0"
        class="text-center q-mx-sm text-bold text-grey-8"
        v-html="questions[qIndex].question"
      ></p>
      <div class="flex column">
        <q-btn
          v-for="option in questions[qIndex].options"
          :key="option"
          unelevated
          rounded
          no-caps
          color="grey"
          :label="option"
          class="q-my-sm q-mx-xl q-pa-md text-black text-bold text-h6"
          @click="moveQuestion"
        />
      </div>
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
