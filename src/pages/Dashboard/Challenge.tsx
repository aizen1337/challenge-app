import { useParams } from "react-router-dom"
const Challenge = () => {
    const {challengeId} = useParams()
  return (
    <div>Challenge</div>
  )
}

export default Challenge