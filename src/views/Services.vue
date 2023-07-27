<template>
  <v-container style="background-color: black" fluid class="pa-0">
    <v-carousel :show-arrows="false">
      <v-carousel-item
        width="auto"
        v-for="(item, i) in imageItems"
        :key="i"
        :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>
  </v-container>
  <v-container style="background-color: black; height: 100%">
    <div>
      <v-card><v-card-title>test</v-card-title></v-card>
    </div>
  </v-container>
</template>

<style lang="scss"></style>

<script lang="ts" setup>
import image1 from "../assets/1a419a1b56a.jpg";
import image2 from "../assets/992dcfbd2f51.jpg";
import image3 from "../assets/c08162eb8ce3.jpg";
import image4 from "../assets/4d10301514b.jpg";
import image5 from "../assets/ff0ba2c3403a.jpg";
import image6 from "../assets/bf51d58e2f22.jpg";

const imageItems = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
  {
    src: image4,
  },
  {
    src: image5,
  },
  {
    src: image6,
  },
];
</script>
