import {useSelector} from "react-redux";
import {selectLoggedInUser} from "../store/slices/userSlice";

const AdminPage = () => {
    const user = useSelector(selectLoggedInUser)

    return (
        <h1>Hi, from {user.name}, who has roles [{user.roles.join(", ")}]</h1>
    )
}

export default AdminPage