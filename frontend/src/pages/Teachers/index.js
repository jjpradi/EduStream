import  {useState,useEffect}from "react"
import "./index.css"
const Teachers=()=>{


    const [teachersList,setTeachers]=useState([])
    useEffect(()=>{

 const getTeachers=async()=>{


    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json()
console.log(`teachersList:${data}`)
setTeachers(data)
console.log(data)

}

getTeachers()
    },[])



    return(


        <div    className="teachers-list">
<table    >


<thead>


<td>id</td>
<td>name</td>
<td>phone</td>

</thead>

<tbody>
    {teachersList.map(e=>    
<tr>
<td>{e.id}</td>
<td>{e.name}</td>
<td>{e.phone}</td>
</tr>



    


    )}
</tbody>
</table>


        </div>



    )

}


export default Teachers