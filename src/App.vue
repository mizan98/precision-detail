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
        <div class="d-flex justify-space-around">
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props"> SERVICES </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in serviceItems"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <v-btn @click="navigateTo('/portfolio')">Portfolio</v-btn>
        <v-btn @click="navigateTo('/about')">About Us</v-btn>
        <v-btn @click="navigateTo('/contact')">Contact Us</v-btn>
      </v-row>
    </v-app-bar>

    <!-- Navigation drawer -->
    <v-navigation-drawer
      temporary
      absolute
      color="green"
      v-model="drawer"
      v-if="isMobile"
    >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          @click="item.children ? toggleItem(item) : navigateTo(item.path)"
        >
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>

        <v-list-group v-if="menuItems" v-model="showSubItems">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> Services </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item @click="navigateTo('/services/leather')"
            >LEATHER RESTORATION</v-list-item
          >
          <v-list-item @click="navigateTo('/services/detailing')"
            >DETAILING</v-list-item
          >
          <v-list-item @click="navigateTo('/services/repair')"
            >BODY REPAIR</v-list-item
          >
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Router view to render components based on the active route -->
    <router-view></router-view>
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
  { title: "Portfolio", path: "/portfolio" },
  { title: "About Us", path: "/about" },
  { title: "Contact Us", path: "/contact" },
  {
    title: "Services",
    children: [
      { title: "LEATHER RESTORATION", path: "/services/leather" },
      { title: "DETAILING", path: "/services/detailing" },
      { title: "BODY REPAIR", path: "/services/repair" },
    ],
    expanded: false,
  },
];

let showSubItems = false;
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

function toggleItem(item: { expanded: boolean }) {
  item.expanded = !item.expanded;
  showSubItems = item.expanded;
}
</script>
