import React from 'react'
import Navbar from '../components/Navbar'
import Grid from '@mui/material/Grid'

type Props = {
    children?: React.ReactNode
}

const DashboardLayout = ({children}: Props) => {
  return (
    <>
    <Navbar/>
    <Grid sx={{
        mt: 10,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        {children}
    </Grid>
    </>
  )
}

export default DashboardLayout