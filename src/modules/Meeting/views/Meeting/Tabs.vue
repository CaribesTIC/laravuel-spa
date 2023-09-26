<script lang="ts" setup>
import { defineAsyncComponent, shallowRef, ref } from 'vue'
import AppPageHeader from "@/components/AppPageHeader.vue"
import { useRouter } from 'vue-router'

const TabMeeting = defineAsyncComponent(() => import('../../components/Meeting/TabMeeting.vue'))
const TabAgreement = defineAsyncComponent(() => import('../../components/Meeting/TabAgreement.vue'))
const TabAttende = defineAsyncComponent(() => import('../../components/Meeting/TabAttende.vue'))
const TabApproach = defineAsyncComponent(() => import('../../components/Meeting/TabApproach.vue'))

const props = defineProps<{ id?: string }>()

const tabs = [
  { component: TabMeeting , title: "Meeting" },
  { component: TabAgreement , title: "Agreements" },
  { component: TabAttende , title: "Attendes" },
  { component: TabApproach , title: "Approaches" }
]

const currentTab = shallowRef(tabs[0])
const router = useRouter();
</script>

<template>
<div>
  <AppPageHeader>Meetings / {{ !props.id ? "Crear" : "Editar" }}</AppPageHeader>
  <div  class="flex space-x-2">
    <button
      class="btn btn-primary mb-4"
      @click="router.push({ path: '/meetings' })"
    >
      Ver todos
    </button>
  </div>

  <div class="myPanel">
    <div class="demo">
      <button
        v-for="(tab, index) in tabs"       
        :key="index"
        class="text-xl"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab.title }}
      </button>
      <KeepAlive>
        <Component
          :is="currentTab.component"
          class="demo-tab"
          :id="props.id"
        />
      </KeepAlive>
    </div>
  </div>
</div>
</template>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 0px solid;
  border-radius: 2px;
  padding: 0px 0px;
  margin-top: 1em;
  margin-bottom: -1px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid;
  cursor: pointer;
  margin-bottom: 0px;
  margin-right: 0px;
}

.tab-button.active{
  @apply font-semibold;
}

[data-theme="winter"] .tab-button.active {
    @apply bg-gray-300;
}

[data-theme="night"] .tab-button.active {
    @apply bg-gray-700;
}

[data-theme="winter"] .tab-button:hover {
    @apply bg-gray-200;
}

[data-theme="night"] .tab-button:hover {
    @apply bg-gray-800;
}
.demo-tab {
  border: 1px solid;
  padding: 10px;
}
</style>
