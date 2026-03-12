import {useState,useEffect,React} from "react"
import { useVirtualizer     } from "@tanstack/react-virtual"
import {useRef} from "react"
import "./index.css"
import {UseStudent} from "../../entitles/UseStudent"

import {UseChart} from "../../entitles/UseChart"


const Directory =   ( ()=>{

const[studentList,setStudent ]=useState([])
const [gend,setGender]=useState("male")
  
console.log(gend)

const {data,isLoading}=UseStudent(gend)
   


console.log(data,isLoading)
   


UseChart(studentList) 


const handleSort=(e)=>{
console.log(e)
       


}

useEffect(()=>{



    const fetchStudents=async()=>{

        const response=await fetch (`https://randomuser.me/api/?results=1000`)






const data2=await response.json()

console.log(data2)

const filteredData=data2.results.map(e=> ({...e,grade:Math.ceil(Math.random()*10)}) )

console.log(filteredData)



    setStudent(filteredData)

    

















}


fetchStudents()

}

,[]

)
const parentRef=useRef()
const rowVirtualizer = useVirtualizer({
    
    
    count: studentList.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
    getTotalSize:()=>4500
  })
const head=["id","name","age","gender","grade","email"]



console.log(studentList)



return(



<div>



<div   style={{marginTop:"23px",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}} ><input type="search" />


<select

onChange={(e)=>setGender(e.target.value)}

>

<option value="male" >male</option>
<option value="female">female</option>
</select>
</div>

<table    style={{marginTop:"55px"}}   >

<thead  role="grid"  aria-colcount={5} aria-rowcount={studentList.length}    style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}  >

<tr   role="row"    >

{



    head.map(e=>


<th   role="columnheader" aria-sort="descending"   onClick={handleSort}  style={{width:"23vw"}}  >{e}</th>

    )
}
 
</tr>



</thead>




<div


ref={parentRef}
      
      style={{
        height: "500px",
        overflow: "auto",
        border: "1px solid #ccc"
      }}

>



<div
   
   style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: "relative"
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
   
   const student = studentList[virtualRow.index]
           
          console.log(student)


          return (

            
            <div   role="row"
            aria-rowindex={virtualRow.index + 1}
              key={virtualRow.key}
              style={{
                position: "absolute",

                display:"flex",
                flexDirection:"row",
                justifyContent:"space-around",
                alignItems:"center",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`
              }}
            >

              <tc   role="gridcell" >{student.id.name}</tc>
              <tc    role="gridcell" >{student?.name?.first} {student?.name?.last}</tc>

    <tc    role="gridcell" >{student.dob.age}</tc> 
    <tc   role="gridcell" >{student.gender}</tc>
    <tc   role="gridcell"   >{student.grade}</tc>
             <tc     role="gridcell"><img style={{fontSize:"44px",borderRadius:"63px",height:"9vh"}}       src= {student.picture.large}/>
              </tc>  
           
            </div>
          )
        })}
      </div>

</div>



</table>




</div>
)



}

)
export default Directory

