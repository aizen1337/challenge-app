import { Alert, Button, Grid, TextField, Typography } from "@mui/material"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import Snackbar from '@mui/material/Snackbar';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Objective from "../../classes/Objective"
import Challenge from "../../classes/Challenge";
import Player from "../../classes/Player";
import { useUser } from "../../context/useUser";
const CreateChallenge = () => {
  const {currentUser} = useUser()
  const router = useNavigate()
  async function setupChallenge(event: FormEvent) {
    console.log(challengeGoals)
    event.preventDefault()
    if(currentUser) {
    const playerInstance = new Player(currentUser.uid, challengeGoals)
    new Challenge(challengeName, challengeLength, playerInstance)
    setVisible(true)
    setTimeout(() => router('/'), 2000)
  }
}
  const [challengeName, setChallengeName] = useState<string>('Challenge')
  const [challengeLength, setChallengeLength] = useState<number>(7)
  const [challengeGoalsInputs, addChallengeGoalsInputs] = useState([1,2,3])
  const [visible,setVisible] = useState(false)
  const challengeGoals: Objective[] = []
  return (
    <>
    <Snackbar open={visible} autoHideDuration={4000} anchorOrigin={{
      horizontal: 'center',
      vertical: 'top'
    }}>
      <Alert severity="success" sx={{ width: '100%' }}>
        Challenge has been successfully created! Redirecting...
      </Alert>
    </Snackbar>
    {!visible &&
    <form onSubmit={setupChallenge}>
    <Grid sx={{
      width: {
        xs: '90vw',
        sm: '30rem'
      }
    }}>
      <TextField 
          sx={{mt:2}}
          required
          error
          label="Name your challenge"
          value={challengeName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChallengeName(event.target.value)}
          variant="outlined"
          fullWidth
          /> 
      <TextField 
          sx={{mt:2}} 
          required
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
          value={challengeLength}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChallengeLength(Number(event.target.value))}
          error
          label="Specify the length of the challenge"
          fullWidth
          /> 
      <>
      {challengeGoalsInputs.map((goal) => 
              <TextField 
              key={goal}
              sx={{mt:1}}
              required
              error
              label={`Specify your ${goal} goal`}
              variant="outlined"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => challengeGoals.push(new Objective(`${event.target.value}`, false))}
              fullWidth
              />
            )
      }
      </>
      <Typography
      sx={{
        display: 'flex',
        alignItems: 'center',
        margin: 2,
        cursor: 'pointer'
      }}
      variant="caption"
      onClick={() => addChallengeGoalsInputs(prevState => [...prevState, (Math.max(...prevState) + 1)])}
      >
        Add more goals <AddOutlinedIcon/>
      </Typography>
      <Button variant="outlined" color="error" type="submit" fullWidth sx={{mt:5}}>
        Create
      </Button>
      </Grid>
    </form>
    }
    </>
  )
}

export default CreateChallenge