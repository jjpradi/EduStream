import {Component} from "react"
import Cookies from "js-cookie"
import {withNavigation} from "../withNavigation"
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import {db,auth} from "../../entitles/Firebase"
import { registerVersion } from "firebase/app"
import "./index.css"
import { doc, getDoc } from "firebase/firestore"
class Login extends Component{
state={email:"",password:"",newList:[],isAdminLogin:true,loginMsg:""}





onName=(event)=>{

this.setState({


email:event.target.value











})




}

 loginAdmin = async (email, password) => {
console.log(password)
 try{
   const userCredential = await signInWithEmailAndPassword(auth, email, password)

   const uid = userCredential.user.uid

   const docRef = doc(db, "users", uid)
   const docSnap = await getDoc(docRef)

   if(docSnap.exists()){
      const admin = docSnap.data().admin

      if(admin === "admin"){

Cookies.set("jwt_token",uid,{expires:30})
Cookies.set("role","admin", {expires:30})




        console.log(uid)
        
        console.log("Admin Login Success")

     this.props.navigate("/")

        
      }else{
        console.log("Not Admin")


      }

   }

 }catch(error){
   console.log(error.message)
 }

}




onPassword=(event)=>{

    this.setState({

        password:event.target.value
    })


}

onDifferent=()=>{

console.log(this.state.isAdminLogin)
   this.setState(prevState=>({

isAdminLogin:!prevState.isAdminLogin

   }))

}

 registerUser = async (users)=>{


const email="pratheepjohn5@gmail.com"
const password="jjpradip7@gmail.com"


    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      console.log("User created:", email)

    } catch (error) {

      console.log("Error:", error.message)

    }

  


}

onSubmitForm=async(e)=>{

    

    e.preventDefault()

console.log(e)

console.log("yvuyjg")

const {email,password}=this.state






console.log(`${email},${password}`)


const userDetails={username:"purpleduck826" , password:"scotty"}

const res= await fetch("https://randomuser.me/api/?results=1000")

const data=await res.json()
const users=(data.results)
console.log("ozsu.catalbas@example.com")


const newOne=users.find(e=>e.email==="ozsu.catalbas@example.com")



console.log(newOne)
    const user = users.find(

    u => u.login.email === email &&
         u.login.password === password
         
  )


console.log(user)
    
const {loginMode,isAdminLogin}=this.state

  if(isAdminLogin){

console.log("admin mode1")




if(email==="jjpradip7@gmail.com"&&password==="JJpradip@37"){



  console.log("admin mode")

  

  const options={

method:"POST",
headers:{
"Content-Type":"application/json",
},
body:

JSON.stringify({email,password})



}









const resp= await fetch('http://localhost:5000/login',options)

const dat=await resp.json()

Cookies.set("role","admin",{expires:30})

console.log(dat)



console.log("success")



    
await this.loginAdmin(email,password)



this.props.navigate("/")




}



  }


else{
  
  try{

    const userCredential = await signInWithEmailAndPassword(
      
      auth,
      email,
      password

    )

 const token = await userCredential.user.getIdToken()
 console.log(token)

   Cookies.set("jwt_token",token,{expires:30})

 this.props.navigate("/")

  
 console.log("Login Success", userCredential.user)


  }catch(error){
    
    console.log(error.message)
    
    alert("Invalid email or password")


  }

}



console.log(data)



}




    render(){

const {email,password,isAdminLogin}=this.state



return(



    <div style={{width:"90vw"}}  className="login-page">
   

          <div   className="login-card"  width={{width:"60vw"}} > 
                
                
                
                <h1>{!isAdminLogin?"student login":"admin login"}</h1>
    <div   >
<form   style={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",height:"17vh"}} onSubmit={this.onSubmitForm} >


<div    > 
<label  htmlFor="username" >USERNAME</label>
<input  id="username"  type="text"   value={email}  onChange={this.onName}  />





</div>



<div>
<label  htmlFor="password"  >PASSWORD</label>

<input  id="password"  type="password"   value={password}  onChange={this.onPassword}  />






</div>

<button  type="submit"   >Login</button>

</form>

<p    style={{textAlign:"center"}} onClick={this.onDifferent}   >Are you {isAdminLogin?"Student":"Admin"}</p>
   
    </div>
    
    </div>
    
    
    
</div>



)
        



    }





}





export default withNavigation(Login)

