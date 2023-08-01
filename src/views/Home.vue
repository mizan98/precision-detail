<template>
  <v-container fluid class="pa-0 ma-0">
    <v-parallax
      height="850"
      class="pa-0 d-sm-flex d-none hidden-sm-and-down"
      id="home-bg-img"
      src="../assets/tyler-clemmensen-d1Jum1vVLew-unsplash.jpg"
    >
      <div id="gradient-overlay-top"></div>

      <div class="pa-0 ma-0" id="gradient-overlay-bottom"></div>
    </v-parallax>
    <v-card class="rounded-0" elevation="0">
      <v-img
        style="height: fit-content"
        class="pa-0 d-sm-none d-flex"
        id="home-bg-img"
        src="../assets/tyler-clemmensen-d1Jum1vVLew-unsplash.jpg"
      >
        <div id="gradient-overlay-top"></div>
        <v-card
          style="height: 100%"
          class="d-flex align-end pb-3 rounded-0 justify-center"
          color="transparent"
          flat
          height="100"
          tile
        >
          <v-btn @click="navigateTo('/services')">Explore</v-btn>
          <v-btn
            @click="navigateTo('/contact')"
            color="white"
            class="pa-2 mx-2"
            style=""
            variant="outlined"
            >Contact Us</v-btn
          >
        </v-card>

        <!-- <div class="pa-0 ma-0" id="gradient-overlay-bottom"></div> -->
      </v-img>
    </v-card>
  </v-container>

  <div class="hidden-sm-and-down">
    <div
      style="width: 75%; margin-left: auto; margin-right: auto; display: block"
    >
      <v-card width="60%" class="flex-wrap ma-2 py-2" elevation="0">
        <h3 class="text-h3">Precise Perfection.</h3>

        <v-card-text class="px-0 pb-1">
          Precision is our motto. We strive to ensure each car we work on is
          handle with the utmost care and spare no detail. Cars are our passion,
          our drive, and its what makes precision detail the best automotive
          detailer in the midlands. Our services are carried to thebhighest
          standard and ensure every customer picks up their car with a
          smile.</v-card-text
        >
      </v-card>
    </div>
  </div>
  <div class="hidden-sm-and-down">
    <div
      style="display: block; margin-left: auto; margin-right: auto; width: 75%"
    >
      <v-card elevation="0" rounded="0">
        <v-card elevation="0" rounded="0">
          <v-parallax
            height="400"
            src="../assets/Screenshot 2023-07-26 104058.png"
          >
            <div
              class="d-flex flex-column fill-height justify-center align-center text-white"
            >
              <h1 class="text-h4 font-weight-thin mb-4">Spotless</h1>
              <h4 class="subheading">Clean factory finish</h4>
            </div>
          </v-parallax>
        </v-card>
      </v-card>
    </div>
  </div>
  <v-container class="hidden-md-and-up">
    <div>
      <v-card class="flex-wrap ma-2 pa-2" elevation="0">
        <h3 class="text-h3">Precise Perfection.</h3>

        <v-card-text class="px-0 pb-1">
          Precision is our motto. We strive to ensure each car we work on is
          handle with the utmost care and spare no detail. Cars are our passion,
          our drive, and its what makes precision detail the best automotive
          detailer in the midlands. Our services are carried to thebhighest
          standard and ensure every customer picks up their car with a
          smile.</v-card-text
        >
      </v-card>
    </div>
  </v-container>
  <div class="hidden-md-and-up">
    <v-container fluid class="pa-0 ma-0" elevation="0">
      <v-parallax height="300" src="../assets/Screenshot 2023-07-26 104058.png">
        <div
          class="d-flex flex-column fill-height justify-center align-center text-white"
        >
          <h1 class="text-h4 font-weight-thin mb-4">Spotless</h1>
          <h4 class="subheading">Clean factory finish</h4>
        </div>
      </v-parallax>
    </v-container>
  </div>

  <v-container class="hidden-sm-and-down" id="scrollTargetElement">
    <div>
      <v-row no-gutters>
        <v-col class="pa-2" cols="md-6 sm-12 xs-12">
          <v-card>
            <v-carousel>
              <v-carousel-item
                v-for="(item, i) in imageItems"
                :key="i"
                :src="item.src"
              >
                <v-img :src="item.src"></v-img>
              </v-carousel-item>
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
            <v-carousel height="500" width="300">
              <v-carousel-item
                width="auto"
                v-for="(item, i) in detailImages"
                :key="i"
                :src="item.src"
              >
              </v-carousel-item>
            </v-carousel>
            <v-card-text
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              similique quis obcaecati libero enim deserunt corporis aliquid,
              magnam officia, sequi architecto eligendi! Ullam error aliquid
              dolor rerum corrupti, ut eveniet.</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="pa-2" cols="md-6 sm-12 xs-12">
          <v-card>
            <v-carousel height="500">
              <v-carousel-item
                width="auto"
                v-for="(item, i) in bodyWorkImages"
                :key="i"
                :src="item.src"
              >
              </v-carousel-item>
            </v-carousel>
            <v-card-text
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              similique quis obcaecati libero enim deserunt corporis aliquid,
              magnam officia, sequi architecto eligendi! Ullam error aliquid
              dolor rerum corrupti, ut eveniet.</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
  <v-container class="hidden-md-and-up" fluid style="background-color: black">
    <div class="d-flex justify-center">
      <v-card color="black" width="300px">
        <v-card-text class="ma-0 px-0 text-h4">Your car is secure.</v-card-text>
        <v-card-text class="px-0 text-white">
          With 24/7 security monitoring and gated entrance, your car is in safe
          hands when kept overnight. Cameras are fitted all around the unit to
          ensure maximum safety when handing your car over to us.
        </v-card-text>
        <v-img
          class="justify-start"
          src="../assets/PXL_20230727_105640423.jpg"
          height="50%"
        ></v-img>
      </v-card>
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
import { useRouter } from "vue-router";
import image1 from "../assets/1a419a1b56a.jpg";
import image2 from "../assets/992dcfbd2f51.jpg";
import image3 from "../assets/c08162eb8ce3.jpg";
import image4 from "../assets/4d10301514b.jpg";
import image5 from "../assets/ff0ba2c3403a.jpg";
import image6 from "../assets/bf51d58e2f22.jpg";

const router = useRouter();
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

function navigateTo(path: string) {
  router.push(path);
}
</script>
