import { useUser } from "../../context/useUser"
import { collection, query, where, onSnapshot, DocumentData } from "firebase/firestore";
import { database } from "../../lib/firebase";
import { useEffect, useState } from "react";
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
    <div>
        {JSON.stringify(data)}
    </div>
  )
}

export default AllChallenges