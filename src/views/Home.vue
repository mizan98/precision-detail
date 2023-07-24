<template>
  <v-container fluid class="pa-0 ma-0">
    <v-parallax
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
  <v-container class="" id="info-container" fluid>
    <v-row>
      <div id="action-btns">
        <v-btn>VALET SERVICES</v-btn>
        <v-btn>BODYWORK DETAILING</v-btn>
        <v-btn>INTERIOR DETAIL</v-btn>
        <v-btn>SMART REPAIRS</v-btn>
        <v-btn>LEATHER RESTORATION</v-btn>
        <v-btn>ALLOY REFURBISHMENTS</v-btn>
      </div>
    </v-row>
    <v-row>
      <v-col cols="2" class="pa-2 ma-2">
        <v-img
          class="pr-0"
          src="../assets/Screenshot 2023-07-21 214649.png"
          style="height: 100%; width: 100%; object-fit: cover"
        ></v-img>
      </v-col>
      <v-col cols="8">
        <v-row class="pa-0">
          <v-card
            elevation="0"
            color="transparent"
            class="text-green pa-0 ma-0"
            title="WELCOME"
          >
          </v-card>
        </v-row>
        <v-row class="pa-0">
          <v-card
            elevation="0"
            color="transparent"
            subtitle="EVERY DETAIL COUNTED"
            class="text-white pa-0 ma-0"
          >
          </v-card>
        </v-row>
        <v-row>
          <v-card
            elevation="0"
            color="transparent"
            class="text-white font-weight-thin pa-0 ma-0"
            text="Welcome to Precision Detail. We provide a mobile service as our vans are self-contained for both water and power. Not only do we specialise in valeting but we also provide a professional service in bodywork detailing, paintwork correction and paint less scratch removals. With a combination of our quality products and our skilled workmanship we deliver an excellent service and finish."
          ></v-card>
        </v-row>
      </v-col>
    </v-row>
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

#info-container {
  background: rgb(0, 0, 0);
  height: 50%;
}
</style>

<script lang="ts" setup>
import { ref } from "vue";
</script>
