import { useUser } from "../context/useUser"
import Login from "./Login"
import Dashboard from "./Dashboard"
const App = () => {
    const {currentUser} = useUser()
    return currentUser ? <Dashboard/> : <Login/>
}

export default App