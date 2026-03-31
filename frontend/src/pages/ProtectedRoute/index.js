import Cookies from "js-cookie"
import {useNavigate,Navigate,Route} from "react-router-dom"

import {useEffect,useState} from "react"

const ProtectedRoute=({children})=>{
const navigate=useNavigate()

const jwt=Cookies.get("jwt_token")
console.log(jwt)

if(jwt===undefined){
    console.log("login route")

return <Navigate to="/login"   replace/>


}


else{


const role=Cookies.get("role")
if(role=="admin"){


return {...children}
}
else{

    return <Navigate to="/directory"/>
}

}




}

export default ProtectedRoute