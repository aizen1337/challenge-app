import { Navigate } from "react-router-dom";
import { useUser } from "../context/useUser";
import DashboardLayout from "../layouts/DashboardLayout";
type PrivateRouteProps = {
    children?: React.ReactNode
}
export default function Protected({children}: PrivateRouteProps ) {
        const { currentUser } = useUser()
        return currentUser ? 
        <DashboardLayout>
        {children} 
        </DashboardLayout>
        : 
        <Navigate to="/"/>
}
