import Sidebar from "../../widgets/Sidebar"
import "./index.css"
import {useState,useEffect} from "react"
import Rechart from "../../features/Rechart"
import Attendance from "../../features/Attendance"
let attend=[]

for (let y=0;y<=7;y++){
 const presence=Math.ceil(Math.random()*100)   
const absence=100-presence
const newObject={pres:presence,abs:absence}
console.log(newObject)
    attend.push(newObject)
}

console.log(attend)
const EduStream=()=>{

const [list,setList]=useState([])


useEffect(()=>{
const getList=async()=>{

const userDetails={username:"purpleduck826" , password:"scotty"}

const options={

    method:"POST",
    body:JSON.stringify(userDetails)
}
const res= await fetch("https://randomuser.me/api/?results=1000")
console.log(res)
const data=await res.json()

console.log(data)


const filtered= data.results.map(e=>({...e,ranNum:Math.ceil(Math.random()*10),attendance:Math.ceil(Math.random()*100) })  )

setList(filtered)

}
getList()





},[])
return (


   <div   className="home-page">  







<div>


<h1>Administrative Overview</h1>





<p>Total Enrollment</p>
<p>Average Attendance Rate</p>
<p>Performance Trends</p>



<Rechart  stuList={list}  /> 



<Attendance    attendance={attend} />

</div>








</div>

)



}

export default EduStream