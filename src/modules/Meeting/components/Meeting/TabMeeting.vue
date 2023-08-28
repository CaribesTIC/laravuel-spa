<script setup lang="ts">
import { computed } from "vue"
import useTabMeeting from "../../composables/Meeting/useTabMeeting";
import FormMeeting from './FormMeeting.vue';

const props = defineProps<{ id?: string }>()

const {  
  meeting,
  errors,
  pending,      
  submit    
} = useTabMeeting(props.id)

const isTrue = computed(
  () => meeting && meeting.country_id || !props.id
) 
</script>

<template>
<div class="">
  <FormMeeting
    v-if="isTrue"
    :meeting="meeting"
    :errors="errors"
    :pending="pending"
    @submit="submit"    
  />
</div>
</template>
  
