import {useNavigate} from "react-router-dom"

export const withNavigation = (Component) => {
  return function WrappedComponent(props){
    const navigate = useNavigate()

    return <Component {...props} navigate={navigate} />
  }
}