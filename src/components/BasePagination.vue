<script lang="ts">
export default {
  props: {
    store: {
      type: Object,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      default: null,
    },
    meta: {
      type: Object,
      required: true,
    },
    links: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isPropsPath(page) {
      if (this.$props.path) {
        this.$router.push({
          path: this.$props.path,
          query: { page },
        });
      }
    },
    firstPage() {
      this.$props.store.paginateMessages( this.$props.links.first )
      this.isPropsPath( 1 )
    },
    prevPage() {
      this.$props.store.paginateMessages( this.$props.links.prev )
      this.isPropsPath( this.$props.meta.current_page - 1 )
    },
    nextPage() {
      this.$props.store.paginateMessages( this.$props.links.next )
      this.isPropsPath( this.$props.meta.current_page + 1 )
    },
    lastPage() {
      this.$props.store.paginateMessages( this.$props.links.last )
      this.isPropsPath( this.$props.meta.last_page )
    }
  }
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

