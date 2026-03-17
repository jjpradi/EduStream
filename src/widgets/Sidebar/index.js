import { useNavigate } from "react-router-dom"
import "./index.css"
import { NavLink } from "react-router-dom"


import Cookies from "js-cookie"



const Sidebar = () => {

    const navigate = useNavigate()

    const onLogout = () => {


        Cookies.remove("jwt_token")

        navigate("/login")

    }



    return (


        <nav style={{ marginLeft: "0px", fontSize: "23px", backgroundColor: "black", width: "30vw", display: "flex", flexDirection: "column", alignItems: "center" }} className="side-bar" >

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}  >

                    <img width="48" height="48" src="https://img.icons8.com/color/48/dashboard--v1.png" alt="dashboard--v1" />

                    <h3 style={{ color: "purple" }}>Edu Stream</h3>





                </div>
                <li>

                    <NavLink to="/login">
                        Login
                    </NavLink>

                </li>
                <li className="Dashboard">


                    <NavLink to="/">


                        Dashboard

                    </NavLink>

                </li>
                <li>
                    <NavLink to="/directory">
                        Students
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/teachers">
                        Teachers
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/exams" >
                        Exams    </NavLink> </li>
                <li>
                    <NavLink to="/time-table">
                    
                    Timetable
                    </NavLink>
                    </li>
                <li>

                    <NavLink to="/notice">
                        Notice

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/enrollment">
                        Enrollment

                    </NavLink>

                </li>





                <li>

                    <NavLink to="/calendar">




                        Calendar


                    </NavLink>

                </li>

            </div>


            <div>
                <li>

                    <NavLink>
                        Settings
                    </NavLink>
                </li>
                <li onClick={onLogout} >

                    <NavLink>
                        Logout
                    </NavLink>

                </li>
            </div>

        </nav>





    )

}


export default Sidebar