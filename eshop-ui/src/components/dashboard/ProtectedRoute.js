import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import {selectLoggedInUser} from "../../store/slices/userSlice";

const ProtectedRoute = ({children, roles}) => {
    const user = useSelector(selectLoggedInUser)
    const location = useLocation()

    // if user is logged in and have any role from required ones
    // allow all logged-in users, if no roles was passed as parameter
    if (!!user && (!roles || user.roles.some(r => roles.includes(r)))) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace/>
}

export default ProtectedRoute