<template>
  <v-container fluid class="pa-0">
    <v-img src="../assets/Screenshot 2023-07-28 012327.png"> </v-img>
    <div class="px-2">
      <v-card class="flex-wrap ma-2 pa-2" elevation="0">
        <h4 class="text-h4">Endless experience.</h4>
        <v-card-text class="px-0 pb-1">
          With over 10+ years in the industry, our expertise in the automitive
          field are second to none. Our craftsmanship is at the peak of car
          perfection and strive to only increase out standards in 3 ways..
        </v-card-text>
      </v-card>
    </div>
  </v-container>

  <v-container style="background-color: black" fluid>
    <div>
      <v-tabs
        v-model="tab"
        color="green"
        align-tabs="center"
        class="text-white"
      >
        <v-tab value="one">Leather Restoration</v-tab>
        <v-tab value="two">Detailing</v-tab>
        <v-tab value="three">Body Work</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-carousel :show-arrows="false">
            <v-carousel-item
              width="auto"
              v-for="(item, i) in imageItems"
              :key="i"
              :src="item.src"
            >
            </v-carousel-item>
          </v-carousel>
          <v-card elevation="0" class="px-0 text-white" color="black">
            <v-card-title class="px-0"> Leather Restoration </v-card-title>
            <v-card-text class="px-0">
              <div>
                At precision detail our leather restoration service is available
                at a great competitive price, with our team still serving a job
                finished to perfection. The process is as follows:
              </div>
              <div class="px-8">
                <ul>
                  <li>Fully inspected</li>
                  <li>Thorough cleaning</li>
                  <li>Coating colour matching</li>
                  <li>Airbush for even coverage</li>
                  <li>Clear lacquer applied for long lasting protection</li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item value="two">
          <v-carousel :show-arrows="false">
            <v-carousel-item
              width="auto"
              v-for="(item, i) in detailImages"
              :key="i"
              :src="item.src"
            >
            </v-carousel-item>
          </v-carousel>
          <v-card
            elevation="0"
            class="px-0 text-white text-justify"
            color="black"
          >
            <v-card-title class="px-0"> Detailing </v-card-title>
            <v-card-text class="px-0">
              <div>
                All our products used are of the best quality. We ensure they
                are not time saving or harmful to your pride and joy. Every
                aspect of the car is carefully enhanced to ensure the highest
                finish is acheived both inside and out when detailing our cars.
              </div>
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item value="three">
          <v-carousel :show-arrows="false">
            <v-carousel-item
              width="auto"
              v-for="(item, i) in bodyWorkImages"
              :key="i"
              :src="item.src"
            >
            </v-carousel-item>
          </v-carousel>
          <v-card
            elevation="0"
            class="px-0 text-white text-justify"
            color="black"
          >
            <v-card-title class="px-0"> Body Work </v-card-title>
            <v-card-text class="px-0">
              <div>
                As automitive enthusiasts ourselves, we understand the pain you
                feel when your car is damaged, this is why we make it our goal
                ot restore these machines to their former glory. By stripping
                each panel and repairing imperfection through careful handling,
                we ernsure each car leaves looking fresh out of the show room.
                As part of body repairs we offer:
              </div>
              <div class="px-8">
                <ul>
                  <li>Scratch repair</li>
                  <li>Dent repair</li>
                  <li>Body panel relaignments</li>
                  <li>Machine polish and finish</li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
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
import { ref } from "vue";

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

const detailImages = [
  {
    src: new URL("../assets/Screenshot 2023-07-31 201552.png", import.meta.url)
      .href,
  },
  {
    src: new URL("../assets/Screenshot 2023-07-31 201624.png", import.meta.url)
      .href,
  },
  {
    src: new URL("../assets/Screenshot 2023-07-31 201727.png", import.meta.url)
      .href,
  },
  {
    src: new URL("../assets/Screenshot 2023-07-31 201913.png", import.meta.url)
      .href,
  },
];

const bodyWorkImages = [
  {
    src: new URL("../assets/Screenshot 2023-07-31 205235.png", import.meta.url)
      .href,
  },
  {
    src: new URL("../assets/Screenshot 2023-07-31 205257.png", import.meta.url)
      .href,
  },
  {
    src: new URL("../assets/Screenshot 2023-07-31 205407.png", import.meta.url)
      .href,
  },
  {
    src: new URL("../assets/Screenshot 2023-07-31 205346.png", import.meta.url)
      .href,
  },
  {
    src: new URL("../assets/Screenshot 2023-07-31 205616.png", import.meta.url)
      .href,
  },
  {
    src: new URL("../assets/Screenshot 2023-07-31 205639.png", import.meta.url)
      .href,
  },
];

const tab = ref(null);
</script>
