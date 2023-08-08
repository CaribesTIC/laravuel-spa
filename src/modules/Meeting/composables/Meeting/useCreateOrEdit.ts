import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useHttp from "@/composables/useHttp";
import MeetingService from "../../services/Meeting"

import type { Meeting } from "../../types/Meeting"


export default (meetingId?: string) => {
  const router = useRouter();
  
  const meeting: Meeting = reactive({
    city_id: "", 
    app_date: "", 
    start_time: "", 
    place: "", 
    entity_id: "", 
    dependence_id: "", 
    subject: "", 
    reason: "", 
    observation: "", 
  })

  
  
  const {  
    errors,
    pending,

    getError
  } = useHttp()
  
  onMounted(async () => {
    if (meetingId) {
      pending.value = true
      MeetingService.getMeeting(meetingId)
        .then((response) => { 
          meeting.city_id = response.data.data.city_id 
          meeting.app_date = response.data.data.app_date 
          meeting.start_time = response.data.data.start_time 
          meeting.place = response.data.data.place 
          meeting.entity_id = response.data.data.entity_id 
          meeting.dependence_id = response.data.data.dependence_id 
          meeting.subject = response.data.data.subject 
          meeting.reason = response.data.data.reason 
          meeting.observation = response.data.data.observation 
        })
        .catch((err) => {        
          errors.value = getError(err)
        })
        .finally(() => {
          pending.value = false;
        })
    }
    pending.value = true
    
  })

  const insertMeeting = async (meeting: Meeting) => {  
    pending.value = true
    return MeetingService.insertMeeting(meeting)
      .then((response) => {         
        alert( response.data.message )
        router.push( { path: '/meetings' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }

  const updateMeeting = async (meeting: Meeting, meetingId: string) => {
    pending.value= true
    return MeetingService.updateMeeting(meetingId, meeting)
      .then((response) => {
        alert( response.data.message )
        router.push( { path: '/meetings' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }
  
  const submit = (meeting: Meeting, meetingId?: string) => {  
    !meetingId ? insertMeeting(meeting)  : updateMeeting(meeting, meetingId)
  }

  return {
    meeting,
    errors,
    
    pending,
    router,

    submit    
  }

}
