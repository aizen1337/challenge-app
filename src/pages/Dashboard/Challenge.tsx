import { DocumentData, doc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { database } from "../../lib/firebase"
const Challenge = () => {
  const {challengeId} = useParams()
  const [data,setData] = useState<DocumentData  | undefined>([])
  useEffect(() => {
   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
   onSnapshot(doc(database, 'challenges', challengeId!), (snapshot) => {
      setData(snapshot.data())
   })
  },[])
  return (
    <div>
      Challenge
      {JSON.stringify(data)}
    </div>
   
  )
}

export default Challenge