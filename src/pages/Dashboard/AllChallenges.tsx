import { useUser } from "../../context/useUser"
import { collection, query, where, onSnapshot, DocumentData } from "firebase/firestore";
import { database } from "../../lib/firebase";
import { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const AllChallenges = () => {
   const [data,setData] = useState<DocumentData[] | []>([])
   const {currentUser} = useUser()
   const q = query(collection(database, 'challenges'), where('players', 'array-contains', currentUser?.uid))
   useEffect(() => {
    onSnapshot(q, (snapshot) => {
        const challengeData: DocumentData[] | { id: string; }[] = [];
        snapshot.docs.forEach((doc) => {
            challengeData.push({id: doc.id, ...doc.data()});
        });
    setData(challengeData as DocumentData[])
    })
   },[])
  return (
    <Grid sx={{width: '20rem'}}>
        {data?.map((challenge) => (
          <Grid item key={challenge.id}>
            <Link to={challenge.id}>
            <Card>
              <CardContent>
                <Typography color={'error'} variant="h4">
                  {challenge.title || challenge.id}
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
        ))}
    </Grid>
  )
}

export default AllChallenges