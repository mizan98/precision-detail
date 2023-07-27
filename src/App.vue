<template>
  <v-app>
    <!-- App bar -->
    <v-app-bar elevation="0">
      <v-toolbar-title @click="navigateTo('/')">
        Precision Detail
      </v-toolbar-title>

      <!-- Hamburger icon for small screens -->
      <v-btn icon @click="drawer = !drawer" v-if="isMobile">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <!-- App bar navigation options for larger screens -->
      <v-row v-else class="mr-2">
        <v-spacer></v-spacer>

        <v-icon class="mdi mdi-phone-outline pr-2 justify"></v-icon>
        <v-toolbar-title> 07967 374 235 </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="scrollToTargetElement"> SERVICES </v-btn>
        <v-btn @click="navigateTo('/portfolio')">Portfolio</v-btn>
        <v-btn @click="navigateTo('/contact')">Contact Us</v-btn>
      </v-row>
    </v-app-bar>

    <!-- Navigation drawer -->
    <v-navigation-drawer temporary v-model="drawer" v-if="isMobile" app>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          @click="navigateTo(item.path)"
        >
          <v-list-item-title class="">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <!-- Router view to render components based on the active route -->
      <router-view></router-view>

      <v-footer></v-footer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const drawer = ref(false);
const router = useRouter();

const serviceItems = [
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
];

const menuItems = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "About Us", path: "/about" },
  { title: "Contact Us", path: "/contact" },
];

const isMobile = ref(window.innerWidth <= 980);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 980;
  drawer.value = false;
};

// Add event listener on mount
onMounted(() => {
  window.addEventListener("resize", checkMobile);
});

// Remove event listener on unmount
onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

function navigateTo(path: string) {
  drawer.value = false; // Close the drawer on navigation
  router.push(path);
}

function scrollToTargetElement() {
  router.push({ name: "Home" }).then(() => {
    const targetElement = document.getElementById("scrollTargetElement");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}
</script>
