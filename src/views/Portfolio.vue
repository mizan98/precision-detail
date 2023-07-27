<template>
  <div>
    <v-row no-gutters class="pt-10 mt-10">
      <v-col>
        <v-sheet class="d-flex align-center mb-6" height="100">
          <v-sheet v-for="n in 3" :key="n" class="ma-2 pa-2">
            align-center
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col>
        <v-img src="../assets/1a419a1b56a.jpg"></v-img>
      </v-col>
    </v-row>
  </div>
  <div style="background-color: black">
    <v-row>
      <v-col>
        <v-img src="../assets/4d10301514b.jpg"></v-img>
      </v-col>

      <v-col>
        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            minus incidunt odit fugiat, voluptatum inventore praesentium
            quisquam rem perspiciatis reiciendis ex tempore nemo distinctio
            nihil, doloribus, porro omnis eveniet repellendus!
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts"></script>
