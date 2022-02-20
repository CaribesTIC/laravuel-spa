<template>
  <Header />
  <div class="section">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <slot />
        </div>
      </main>
      <PageFoot />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import PageFoot from "./PageFoot.vue";

export default defineComponent({
  components: {
    Header,
    Sidebar,
    PageFoot
  },
});
</script>
