<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  store: any
  action: string
  path: string
  meta: any
  links: any
}>()

const isPropsPath = (page: number) => {
  if (props.path) {
    router.push({
      path: props.path,
      query: { page },
    });
  }
}

const firstPage = () => {
  props.store.paginateMessages( props.links.first )
  isPropsPath( 1 )
}

const prevPage = () => {
  props.store.paginateMessages( props.links.prev )
  isPropsPath( props.meta.current_page - 1 )
}

const nextPage = () => {
  props.store.paginateMessages( props.links.next )
  isPropsPath( props.meta.current_page + 1 )
}

const lastPage = () => {
  props.store.paginateMessages( props.links.last )
  isPropsPath( props.meta.last_page )
} 
</script>

<template>
  <div aria-label="Pagination" class="flex items-center justify-between py-4">
    <p class="text-sm text-gray-500">
      Page {{ meta.current_page }} of {{ meta.last_page }}
    </p>
    <div class="flex">
      <button
        rel="first"
        type="button"
        @click="firstPage"
        v-if="links.prev"
      >
        Primera
      </button>

      <button
        rel="prev"
        type="button"
        @click="prevPage"
        :class="{ 'rounded-r': !links.next }"
        v-if="links.prev"
      >
        Anterior
      </button>

      <button
        rel="next"
        type="button"
        @click="nextPage"
        :class="{ 'rounded-l': !links.prev }"
        v-if="links.next"
      >
        Siguiente
      </button>

      <button
        rel="last"
        type="button"
        @click="lastPage"
        v-if="links.next"
      >
        Última
      </button>
    </div>
  </div>
</template>

<style scoped>
button {
  @apply
      px-2.5
      py-1.5
      m-1
      text-sm
      text-gray-400
      border
      rounded
      hover:text-gray-500;
}
</style>

