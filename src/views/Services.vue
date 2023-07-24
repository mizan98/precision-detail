<template>
  <v-container fluid class="pa-0">
    <v-parallax
      class="pa-0"
      id="home-bg-img"
      src="../assets/tyler-clemmensen-d1Jum1vVLew-unsplash.jpg"
    >
      <div id="gradient-overlay-top"></div>
      <div id="gradient-overlay-bottom"></div>
    </v-parallax>
  </v-container>
  <!-- Rest of your content goes here -->
</template>

<style lang="scss">
/* Styles for the responsive navigation drawer */
.v-navigation-drawer {
  z-index: 3; /* Ensure the drawer appears above the content */
}

#home-bg-image {
  position: relative;
  top: 0;
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
  background-image: linear-gradient(
    to bottom,
    transparent 30%,
    rgba(42, 41, 50)
  );
}

#info-container {
  background: rgba(42, 41, 50);
  height: 50%;
}
</style>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const drawer = ref(false);
const router = useRouter();

const menuItems = [
  { title: "Home", to: "/" },
  { title: "Services", to: "/services" },
  { title: "Portfolio", to: "/portfolio" },
  { title: "Testimonials", to: "/testimonials" },
  { title: "About Us", to: "/about" },
  { title: "Contact Us", to: "/contact" },
];

function navigate(path) {
  drawer.value = false; // Close the drawer on navigation
  router.push(path);
}
</script>
