import { Navigate } from "react-router-dom";
import { useUser } from "../context/useUser";
type PrivateRouteProps = {
    children?: React.ReactNode
}
export default function Protected({children}: PrivateRouteProps ) {
        const { currentUser } = useUser()
        return currentUser ? children : <Navigate to="/"/>
}
