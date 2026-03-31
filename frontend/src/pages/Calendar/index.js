
import MonthCalendar from "../../features/MonthCalendar"


import { useEffect ,useState} from "react"

const Calendar=()=>{
const [days,setDays]=useState([])

useEffect(()=>{
const getHoliday=async()=>{

    
    const api="ekTZyYLoK5wgQopaJmW5hhT3rx4WZvGL"
const fetchHoliday=await fetch(`https://calendarific.com/api/v2/holidays?&api_key=${api}&country=IN&year=${"2026"}`)
console.log(fetchHoliday)

const res=await fetchHoliday.json()
console.log(res)
setDays(res.response.holidays)

console.log(res)

}
getHoliday()


},[])
console.log(days)
console.log("days")
    return(

        <div>
<MonthCalendar  oldDays={days} />
        </div>
    )
}

export default Calendar