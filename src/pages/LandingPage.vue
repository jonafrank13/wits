<template>
  <q-page class="flex flex-start column bg-accent q-px-md q-pb-lg">
    <h4 class="text-h4 text-center text-secondary">Welcome Reynard!</h4>
    <h5 class="text-h5 text-center text-white">Your Wits streak (1)</h5>
    <q-input
      rounded
      outlined
      v-model="text"
      label="Search for subjects offered by tutors"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
      <template v-slot:append>
        <q-icon name="close" />
      </template>
    </q-input>
    <h6 class="text-h6 text-center text-white">Popular Subjects:</h6>
    <div class="flex row justify-center">
      <div class="flex column q-ma-md">
        <q-btn
          unelevated
          class="q-ma-sm"
          rounded
          color="primary"
          label="Math"
        />
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
      class="q-ma-md"
      flat
      bordered
    >
      <q-card-section horizontal>
        <q-card-section class="col-5 flex flex-center">
          <q-img :src="tutor.photo" />
        </q-card-section>
        <q-card-section>
          <p>Name: {{ tutor.name }}</p>
          <p>Qualifications: {{ tutor.qualification }}</p>
          <p>
            Ratings:
            <q-rating :model-value="tutor.ratings" color="black" :max="5" /> ({{
              tutor.totalRatings
            }})
          </p>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions align="around">
        <q-btn flat icon="toggle_on" label="active" />
        <q-btn flat color="primary" icon="calendar"> Book Session </q-btn>
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
