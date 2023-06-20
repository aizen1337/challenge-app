import AllChallenges from "./AllChallenges";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Typography } from "@mui/material";
const Dashboard = () => {
  return (
    <DashboardLayout>
        <Typography variant="h2" sx={{m:5}}>
        Your challenges
        </Typography>
        <AllChallenges/>
    </DashboardLayout>
  )
}

export default Dashboard