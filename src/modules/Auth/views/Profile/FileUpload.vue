<script lang="ts">
import { getError } from "@/utils/helpers";
import FileService from "@/modules/Auth/services/FileService"
import BaseBtn from "@/components/BaseBtn.vue";
import FlashMessage from "@/components/FlashMessage.vue";

export default {
  name: "FileUpload",
  props: {
    fileTypes: {
      type: Array,
      default: null,
    },
    endpoint: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
  },
  components: {
    BaseBtn,
    FlashMessage,
  },
  data() {
    return {
      file: null,
      message: null,
      error: null,
    };
  },
  methods: {
    clearMessage() {
      this.error = null;
      this.message = null;
    },
    fileChange(event) {
      this.clearMessage();
      this.file = event.target.files[0];
    },
    uploadFile() {
      const payload = {};
      const formData = new FormData();
      formData.append("file", this.file);
      payload.file = formData;
      payload.endpoint = this.endpoint;
      this.clearMessage();
      FileService.uploadFile(payload)
        .then(() => {
          this.message = "File uploaded.";
          this.$emit("fileUploaded");
        })
        .catch((error) => (this.error = getError(error)));
    },
  },
};
</script>

<template>
  <form @submit.prevent="uploadFile">
    <div class="mb-4">
      <label for="file" class="sr-only">
        {{ label }}
      </label>
      <input type="file" :accept="fileTypes" @change="fileChange" id="file" />
    </div>
    <BaseBtn text="Upload" />
    <FlashMessage :message="message" :error="error" />
  </form>
</template>
