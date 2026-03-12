import  {useState,useEffect}from "react"

const Teachers=()=>{


    const [teachersList,setTeachers]=useState([])
    useEffect(()=>{

 const getTeachers=async()=>{


    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json()
console.log(data)
setTeachers(data)


}

getTeachers()
    },[])



    return(


        <div>

    {teachersList.map(e=>    
<p>


    
</p>


    )}



        </div>



    )

}


export default Teachers