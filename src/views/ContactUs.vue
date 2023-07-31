<template>
  <div>
    <v-img
      class="hidden-md-and-up"
      src="../assets/Screenshot 2023-07-21 214649.png"
    >
      <!-- <v-card
        class="align-end pa-0"
        flat
        height="100"
        color="transparent"
        elevation="0"
      >
        <v-card color="transparent" elevation="0" class="pa-0">
          <h6 class="text-white">Contact us on</h6>
          <h6 class="text-white">07967 374 235</h6>
          <h6 class="text-white">info@precisiondetail.co.uk</h6>
          <v-card-text>test</v-card-text>
        </v-card>
      </v-card> -->
    </v-img>

    <div>
      <v-card class="flex-wrap ma-2 pa-2" elevation="0">
        <h3 class="text-h3">Contact Us</h3>

        <div
          style="
            border-left-color: rgb(167, 167, 167);
            border-left-style: solid;
          "
        >
          <v-card-text class="pb-1">07967 374 235</v-card-text>
          <v-card-text class="pb-1">info@precisiondetail.co.uk</v-card-text>
        </div>
      </v-card>

      <v-container class="px-0" style="background-color: black">
        <v-card color="black" class="flex-wrap ma-2 pa-2" elevation="0">
          <h3 class="text-h3">Find Us At</h3>

          <div
            style="
              border-left-color: rgb(167, 167, 167);
              border-left-style: solid;
            "
          >
            <v-card-text class="pb-1 text-h5"
              >Unit 3, At, 69 Kings Rd</v-card-text
            >
            <v-card-text class="pb-1 text-h5">Tyseley</v-card-text>
            <v-card-text class="pb-1 text-h5">Birmingham </v-card-text>
            <v-card-text class="pb-1 text-h5">B11 2AX</v-card-text>
            <v-card-text class="pb-1 text-h5"
              >Mon - Fri (9am - 5:30pm)</v-card-text
            >
          </div>
        </v-card>
      </v-container>
    </div>
    <div style="background-color: black">
      <v-row no-gutters>
        <v-col>
          <v-card color="black" elevation="0" class="px-2">
            <v-img
              cover
              height="300"
              src="../assets/Screenshot 2023-07-27 151916.png"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
