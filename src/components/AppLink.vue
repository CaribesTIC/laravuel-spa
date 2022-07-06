<script lang="ts">

import { RouterLink } from 'vue-router'

export default {
  name: 'AppLink',
  inheritAttrs: false,

  props: {
    // add @ts-ignore if using TypeScript
    ...RouterLink.props,
    inactiveClass: String,
  },
  computed: {
    isExternalLink():boolean {
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
  },
}

</script>

<template>
  <!--a
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
  >
    <slot />
  </router-link-->

  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link
    v-else
    v-bind="$props"
    custom
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