import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {selectLoggedInUser} from "../../store/slices/userSlice";

const ProtectedRoute = ({children, roles}) => {
    const user = useSelector(selectLoggedInUser)

    // if user is logged in and have any role from required ones
    if (!!user && user.roles.some(r => roles.includes(r))) {
        return children
    }

    return <Navigate to="/login" replace/>
}

export default ProtectedRoute