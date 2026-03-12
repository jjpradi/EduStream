
import {useState,useEffect} from "react"

const Notice=()=>{

const [news,setNews]=useState([])







useEffect(()=>{


const getNews=async()=>{

    

    const res=await fetch("https://newsdata.io/api/?results=100")

     

    console.log(res)
    


    const data =await res.json()

console.log(data)



}
getNews()
},[])

    return(


<div>




    
</div>


    )


}

export default Notice