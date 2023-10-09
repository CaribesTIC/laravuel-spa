import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import useHttp from "@/composables/useHttp";
import MeetingService from "@/modules/Meeting/services/Meeting";
import type { Meeting } from "../../types/Meeting";

export default (meetingId?: string) => {
  const router = useRouter();    

  const meeting: Meeting = reactive({
    country_id: "", 
    place: "", 
    subject: "", 
    reason: "", 
    observation: "", 
  })

  const {  
    errors,
    pending,

    getError
  } = useHttp()
  
  onMounted(() => {
    if (meetingId) {
      pending.value = true
      MeetingService.getMeeting(meetingId)
        .then((response) => { 
          meeting.country_id = response.data.data.country_id 
          meeting.place = response.data.data.place 
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
  })

  const insertMeeting = async (meeting: Meeting) => {
    pending.value = true
    return MeetingService.insertMeeting(meeting)
      .then((response) => {         
        alert( response.data.message )
        router.push( { path: `/meetings/edit/${response.data.id}` } )
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
    meeting._method = 'PUT'
    return MeetingService.updateMeeting(meetingId, meeting)
      .then((response) => {
        alert( response.data.message )
        //router.push( { path: '/meetings' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }
  
  const submit = (meeting: Meeting) => {
    !meetingId ? insertMeeting(meeting) : updateMeeting(meeting, meetingId)
  }

  return {    
    meeting,
    errors,
    pending,

    submit
  }
}
