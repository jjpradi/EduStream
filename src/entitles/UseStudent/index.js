import { useQuery } from "@tanstack/react-query"

const fetchStudents=async({queryKey})=>{

    console.log(queryKey)
  const gend=queryKey[1].gend


  console.log(gend)

  console.log("gender")
  
  const res=await fetch(`https://randomuser.me/api/?results=1000&gender=${gend}`)
  
  
   const dat=  await res.json()
   console.log(dat)
return dat

}



export const  UseStudent = (gend) => {
  
  console.log(`${gend} usestudent`)
    return useQuery({
    queryKey: ["students", { gend }],
    queryFn: fetchStudents,
    keepPreviousData: true

  })
}