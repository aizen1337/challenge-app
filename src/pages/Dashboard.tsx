import Navbar from "../components/Navbar"
import { useUser } from "../context/useUser"
import { collection, query, where, onSnapshot, setDoc, DocumentData, doc } from "firebase/firestore";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { database } from "../lib/firebase";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import dayjs from "dayjs";
const Dashboard = () => {
    const [data,setData] = useState<DocumentData[] | []>([])
    const [currentDate, setCurrentDate] = useState<dayjs.Dayjs | null >(dayjs(new Date()))
    const {currentUser} = useUser()
   const q = query(collection(database, 'days-of-challenge'), where('id', '==', currentDate?.format('DD.MM.YYYY')));
   useEffect(() => {
    onSnapshot(q, async (snapshot) => {
        const challengeData: DocumentData[] | { id: string; }[] = [];
        if(snapshot.docs.length == 0) {
            await setDoc(doc(database, 'days-of-challenge', `${currentDate?.format('DD.MM.YYYY')}`), {
                id: currentDate?.format('DD.MM.YYYY')
            })
        }
        snapshot.forEach((doc) => {
            challengeData.push({id: doc.id, ...doc.data()});
        });
    setData(challengeData as DocumentData[])
    })
    console.log(currentDate?.format('DD.MM.YYYY'))
    console.log()
   },[currentDate])
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
        <MobileDatePicker defaultValue={dayjs(new Date()).locale('pl')} onChange={(value) => setCurrentDate(value)}/>
        {JSON.stringify(data)}
    </Container>
    </>
  )
}

export default Dashboard