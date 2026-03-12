import { useQuery } from "@tanstack/react-query"

import Rechart from "../../features/Rechart"

const listConvert=async(list)=>{
console.log(`list ${list}`)
return list

}
export const UseChart=(list)=>{
console.log(list)
console.log("usechart")


return (


    useQuery({
        queryKey:[{list}], 
        queryFn:listConvert
    
    })
)

}
