import { useRef,useState,useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
 const  MonthCalendar=(props)=> {

  const calendarRef = useRef(null)

  const goNext=()=> {
    
    const calendarApi = calendarRef.current.getApi()
    calendarApi.next()

  }


  const [days,setDays]=useState([])

useEffect(()=>{
const getHoliday=async()=>{

    
    const api="ekTZyYLoK5wgQopaJmW5hhT3rx4WZvGL"
const fetchHoliday=await fetch(`https://calendarific.com/api/v2/holidays?&api_key=${api}&country=IN&year=${"2026"}`)
console.log(fetchHoliday)
const res=await fetchHoliday.json()


  const formattedHolidays = res.response.holidays.map((holiday) => ({
        title: holiday.name,
        start: holiday.date.iso,
        color: "red",
        display:"background",
        backgroundColor:"red"
      }));

      setDays(formattedHolidays)



}
getHoliday()


},[])

console.log(days)
  return (


    <div  style={{width:"90vw"}}>
      <button onClick={goNext}>Go Next!</button>
      <FullCalendar  events={days} width="100%" height="90vh"  ref={calendarRef} plugins={[ dayGridPlugin,interactionPlugin,timeGridPlugin ]}   />
    </div>
  
  )

}


export default MonthCalendar

