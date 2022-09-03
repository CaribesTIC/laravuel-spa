<script lang="ts">

import { RouterLink } from 'vue-router'

export default {
  name: 'AppLink',
  inheritAttrs: false,

  props: {
    // @ts-ignore if it shows check error
    ...RouterLink.props,
    inactiveClass: String,
  },
  computed: {
    isExternalLink():boolean {
      // @ts-ignore if it shows check error
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
  }
}

</script>

<template>
  <a
    v-if="isExternalLink"
    v-bind="$attrs"
    :href="to"
    target="_blank"
    rel="noopener"
    class="external-link"
  >
    <slot />
  </a>
  
  <router-link
    v-else
    v-bind="$props"
    class="internal-link"
    v-slot="{ isActive, href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>
