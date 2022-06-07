<script setup lang="ts">
import Messages from "@/modules/Message/components/Messages.vue"
import MessageForm from "@/modules/Message/components/MessageForm.vue"
</script>

<template>
  <div class="p-5 xl:px-0">
    <div class="max-w-xl m-auto">
      <MessageForm class="mb-4" />
      <article class="p-5 bg-white rounded shadow">
        <Messages />
      </article>
    </div>
  </div>
</template>
