<template>
  <v-container fluid class="pa-0 ma-0">
    <v-parallax
      height="850"
      class="pa-0 d-sm-flex d-none"
      id="home-bg-img"
      src="../assets/tyler-clemmensen-d1Jum1vVLew-unsplash.jpg"
    >
      <div id="gradient-overlay-top"></div>

      <div class="pa-0 ma-0" id="gradient-overlay-bottom"></div>
    </v-parallax>
    <v-img
      style="height: fit-content"
      class="pa-0 d-sm-none d-flex"
      id="home-bg-img"
      src="../assets/tyler-clemmensen-d1Jum1vVLew-unsplash.jpg"
    >
      <div id="gradient-overlay-top"></div>
      <div class="pa-0 ma-0" id="gradient-overlay-bottom"></div>
    </v-img>
  </v-container>
  <v-container id="info-container">
    <div>
      <v-card class="flex-wrap ma-2 pa-2" elevation="0">
        <v-row no-gutters>
          <v-col cols="sm-12 xs-12">
            <v-card-text class="text-h3">Precise Perfection.</v-card-text>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="md-6 sm-12 xs-12">
            <v-card-text>
              Precision is our motto. We strive to ensure each car we work on is
              handle with the utmost care and spare no detail. Cars are our
              passion, our drive, and its what makes precision detail the best
              automotive detailer in the midlands. Our services are carried to
              thebhighest standard and ensure every customer picks up their car
              with a smile.</v-card-text
            >
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
  <v-container fluid class="pa-0 ma-0" elevation="0">
    <v-parallax height="300" src="../assets/Screenshot 2023-07-26 104058.png">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <h1 class="text-h4 font-weight-thin mb-4">Spotless</h1>
        <h4 class="subheading">Desire for perfection</h4>
      </div>
    </v-parallax>
  </v-container>
  <v-container>
    <div>
      <v-row no-gutters>
        <v-col class="pa-2" cols="md-6 sm-12 xs-12">
          <v-carousel height="400" width="400px">
            <v-carousel-item
              v-for="(item, i) in imageItems"
              :key="i"
              :src="item.src"
            >
              <v-img :src="item.src"></v-img>
            </v-carousel-item>
          </v-carousel>
          <v-card>
            <v-carousel>
              <v-carousel-item
                height="350"
                src="../assets/1a419a1b56a.jpg"
                cover
              ></v-carousel-item>

              <v-carousel-item
                src="../assets/4d10301514b.jpg"
                cover
              ></v-carousel-item>

              <v-carousel-item
                src="../assets/992dcfbd2f51.jpg"
                cover
              ></v-carousel-item>
            </v-carousel>
            <v-card-text
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              similique quis obcaecati libero enim deserunt corporis aliquid,
              magnam officia, sequi architecto eligendi! Ullam error aliquid
              dolor rerum corrupti, ut eveniet.</v-card-text
            >
          </v-card>
        </v-col>

        <v-col class="pa-2" cols="md-6 sm-12 xs-12">
          <v-card>
            <v-card-text
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              ipsum ullam, quo quis reprehenderit, ut neque minima non impedit
              atque assumenda voluptatum distinctio pariatur nam amet inventore
              deserunt, accusamus sit.</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="pa-2" cols="md-6 sm-12 xs-12">
          <v-card>
            <v-card-text
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              similique quis obcaecati libero enim deserunt corporis aliquid,
              magnam officia, sequi architecto eligendi! Ullam error aliquid
              dolor rerum corrupti, ut eveniet.</v-card-text
            >
          </v-card>
        </v-col>

        <v-col class="pa-2" cols="md-6 sm-12 xs-12">
          <v-card>
            <v-card-text
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              ipsum ullam, quo quis reprehenderit, ut neque minima non impedit
              atque assumenda voluptatum distinctio pariatur nam amet inventore
              deserunt, accusamus sit.</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style lang="scss">
#home-bg-image {
  height: auto;
  width: 100%;
}
#gradient-overlay-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    transparent 70%,
    rgb(255, 255, 255)
  );
}

#gradient-overlay-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-image: linear-gradient(to bottom, transparent 30%, rgb(0, 0, 0));
}

#info-card-two {
  bottom: 0;
}
</style>

<script lang="ts" setup>
import { ref } from "vue";

const imageItems = [
  {
    src: "../assets/1a419a1b56a.jpg",
  },
  {
    src: "../assets/992dcfbd2f51.jpg",
  },
  {
    src: "../assets/c08162eb8ce3.jpg",
  },
  {
    src: "../assets/4d10301514b.jpg",
  },
  {
    src: "../assets/ff0ba2c3403a.jpg",
  },
  {
    src: "../assets/bf51d58e2f22.jpg",
  },
];

const items = [
  {
    src: "../assets/1a419a1b56a.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
];
</script>
