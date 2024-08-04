<template>
  <q-page class="flex flex-start column bg-primary q-px-md q-pb-lg">
    <h4 class="text-h4 q-mb-sm text-center text-secondary cooper_italics">
      Welcome Reynard!
    </h4>
    <h5 class="text-h5 text-center text-bold text-white">
      Your Wits streak <q-icon name="bolt" color="white" size="2rem" />
      <q-avatar color="white" size="28px" text-color="accent">50</q-avatar>
    </h5>
    <q-input
      color="accent"
      standout
      rounded
      outlined
      v-model="text"
      label="Search for subjects offered by tutors"
      class="q-mx-sm text-caption"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
      <template v-slot:append>
        <q-icon name="close" />
      </template>
    </q-input>
    <h6 class="text-h6 text-center text-white q-mb-sm">Popular Subjects:</h6>
    <div class="flex row justify-center">
      <div class="flex column q-ma-md">
        <q-btn unelevated class="q-ma-sm" rounded color="accent" label="Math" />
        <q-btn
          unelevated
          class="q-ma-sm"
          rounded
          color="secondary"
          label="Science"
        />
      </div>
      <div class="flex column q-ma-md">
        <q-btn unelevated class="q-ma-sm" rounded color="red" label="Humans" />
        <q-btn
          unelevated
          class="q-ma-sm"
          rounded
          color="pink"
          label="English"
        />
      </div>
    </div>
    <q-card
      v-for="tutor of tutors"
      :key="tutor.id"
      class="q-ma-md rounded-corners"
      flat
      bordered
      rounded
    >
      <q-card-section horizontal>
        <q-card-section class="col-5 flex flex-center">
          <q-img height="105px" width="120px" :src="tutor.photo" />
        </q-card-section>
        <q-card-section>
          <p><b>Name</b>: {{ tutor.name }}</p>
          <p><b>Qualifications</b>: {{ tutor.qualification }}</p>
          <p>
            <b>Ratings</b>:
            <q-rating :model-value="tutor.ratings" color="black" :max="5" /> ({{
              tutor.totalRatings
            }})
          </p>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions class="q-px-md" align="between">
        <q-btn unelevated no-caps rounded color="black" class="q-px-md">
          Start Session
        </q-btn>
        <q-btn
          unelevated
          no-caps
          rounded
          color="primary"
          class="q-px-md text-black"
        >
          Check All Sessions
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "LandingPage",
});

const tutors = ref([
  {
    id: 1,
    name: "Shannon Yap",
    qualification: "Degree in Computer Science at NUS",
    ratings: 4,
    totalRatings: 45,
    photo:
      "https://www.venkateshwaragroup.in/vgiblog/wp-content/uploads/2022/09/Untitled-design-2-1.jpg",
  },
  {
    id: 2,
    name: "Tim Cook",
    qualification: "Degree in Business at Harward",
    ratings: 5,
    totalRatings: 45000,
    photo:
      "https://cdn.outsideonline.com/wp-content/uploads/2021/02/03/tim-cook-apple-park_s.jpg?crop=1:1&width=600&enable=upscale&quality=100",
  },
  {
    id: 3,
    name: "Elon Musk",
    qualification: "College Dropout",
    ratings: 2,
    totalRatings: 5,
    photo:
      "https://i.insider.com/5db36222dee019314343a5b6?width=600&format=jpeg&auto=webp",
  },
  {
    id: 4,
    name: "Vinicius Jr",
    qualification: "2nd Year JC1 student",
    ratings: 1,
    totalRatings: 77,
    photo:
      "https://t4.ftcdn.net/jpg/00/55/95/23/360_F_55952330_seOl7utkPA1281NkW0rkMd7fl2glYZsH.jpg",
  },
  {
    id: 5,
    name: "Sakina Karchaoui",
    qualification: "Year 2 Ngee Ann engineering student",
    ratings: 4.5,
    totalRatings: 18,
    photo:
      "https://static1.purepeople.com/articles/3/24/54/43/@/3441799-sakina-karchaoui-membre-de-l-equipe-de-580x0-3.jpg",
  },
]);
</script>
