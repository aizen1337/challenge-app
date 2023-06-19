import Navbar from "../../components/Navbar"
import { useUser } from "../../context/useUser"
import { collection, query, where, onSnapshot, setDoc, DocumentData, doc } from "firebase/firestore";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { database } from "../../lib/firebase";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import dayjs from "dayjs";
import AllChallenges from "./AllChallenges";
const Dashboard = () => {
    const [data,setData] = useState<DocumentData[] | []>([])
    const {currentUser} = useUser()
//    useEffect(() => {
//     onSnapshot(q, async (snapshot) => {
//         const challengeData: DocumentData[] | { id: string; }[] = [];
//         snapshot.forEach((doc) => {
//             challengeData.push({id: doc.id, ...doc.data()});
//         });
//     setData(challengeData as DocumentData[])
//     })
//    },[currentDate])
  return (
    <>
    <Navbar/>
    <Container sx={{
        mt: 10,
        p:0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
      <AllChallenges/>
    </Container>
    </>
  )
}

export default Dashboard