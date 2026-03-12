import { BrowserRouter,Routes,Route } from "react-router-dom"
import Sidebar from "../widgets/Sidebar"
import Teachers  from "../pages/Teachers"
import EduStream from "../pages/EduStream"
import Directory from "../pages/Directory"
import Notice from "../pages/Notice"
import Login from "../pages/Login"
import Calendar from "../pages/Calendar"

import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import Enrollment from "../pages/Enrollment"
import ProtectedRoute from "../pages/ProtectedRoute"
const queryClient=new QueryClient()
const App=()=>{



    return (

<QueryClientProvider client={queryClient}>

<div  style={{display:"flex",margin:"0px",  flexDirection:"row",height:"100vh"}} className="edu-stream">





<Sidebar />




<Routes>

    <Route path="/login" element={
        
             <Login/>
      

        }/>
    <Route path="/"  element={
        <ProtectedRoute>
        <EduStream/>
        </ProtectedRoute>

}/>
<Route path="/directory"  element={<Directory/>

}/>


<Route path="/teachers" element={<Teachers/>}/>


<Route path="/notice" element={<Notice/>}    />
<Route path="/calendar" element={<Calendar/>}/>
<Route path="/enrollment" element={<Enrollment/>}/>
</Routes>

    
</div>

</QueryClientProvider>
    )

}

export default App