<template>
  <div>
    <v-img src="../assets/Screenshot 2023-07-21 214649.png">
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

      <v-card
        style="height: 100%"
        class="d-flex align-end pb-3 rounded-0"
        color="transparent"
        flat
        height="100"
        tile
      >
        <v-card class="pa-2 rounded-0">
          <v-card-text class="pa-0 font-weight-black">
            Contact us on
          </v-card-text>
          <v-card-text class="pa-0">07967 374 235</v-card-text>
          <v-card-text class="pa-0">info@precisiondetail.co.uk</v-card-text>
        </v-card>
      </v-card>
    </v-img>
    <div>
      <v-row no-gutters>
        <v-col>
          <v-card elevation="0" class="px-2">
            <v-card-text class="text-center pb-0"
              >Unit 3, At, 69 Kings Rd</v-card-text
            >
            <v-card-text class="pa-0 text-center">Tyseley</v-card-text>
            <v-card-text class="pa-0 text-center">Birmingham </v-card-text>
            <v-card-text class="pa-0 text-center">B11 2AX</v-card-text>
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
