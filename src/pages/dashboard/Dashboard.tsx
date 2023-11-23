
import { Box, Card, Grid, Typography, Avatar } from '@mui/material';
import Header from '../../components/header/HeaderText.tsx';
import TableForDashboard from '../../components/table/Table.tsx';
import DoughnutChart from '../../components/charts/DoughnutCharts.tsx';

const Dashboard = () => {

  return (
    <Box>
      <Box display='flex' mb={1}>
          <Header title="Dashboard"/>
      </Box>
      <Grid container spacing={2}>
        <Grid item sm={3} xs={12}>
          <Card sx={{display:'flex', justifyContent:'space-between'}}>
            <Box>
              <Typography fontWeight='bold'>card 1</Typography>
              <Typography variant='h4' fontWeight='bold'>text</Typography>
              <Typography variant='h6' mt={1}>text</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#222B5D' }} variant="rounded">
                1
            </Avatar>
          </Card>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Card sx={{display:'flex', justifyContent:'space-between'}}>
            <Box>
              <Typography fontWeight='bold'>card 2</Typography>
              <Typography variant='h4' fontWeight='bold'>text</Typography>
              <Typography variant='h6' mt={1}>text</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#222B5D' }} variant="rounded">
                2
            </Avatar>
          </Card>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Card sx={{display:'flex', justifyContent:'space-between'}}>
            <Box>
              <Typography fontWeight='bold'>card 3</Typography>
              <Typography variant='h4' fontWeight='bold'>text</Typography>
              <Typography variant='h6' mt={1}>text</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#222B5D' }} variant="rounded">
                3
            </Avatar>
          </Card>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Card sx={{display:'flex', justifyContent:'space-between'}}>
            <Box>
              <Typography fontWeight='bold'>card 4</Typography>
              <Typography variant='h4' fontWeight='bold'>text</Typography>
              <Typography variant='h6' mt={1}>text</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#222B5D' }} variant="rounded">
                4
            </Avatar>
          </Card>
        </Grid>
        <Grid item sm={8} xs={12}>
          <Card sx={{height:'100%'}} >
            <Typography fontWeight='bold' mb={1}> Table</Typography>
             {/* 'here we show table' */}
             <TableForDashboard/>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card sx={{height:'100%'}}>
            <Typography fontWeight='bold' mb={1}> Graph</Typography>
            <DoughnutChart/>
            {/* <here we show Chart/> */}
          </Card>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Card sx={{display:'flex', justifyContent:'space-between'}}>
            <Box>
              <Typography fontWeight='bold'>card 1</Typography>
              <Typography variant='h4' fontWeight='bold'>text</Typography>
              <Typography variant='h6' mt={1}>text</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#222B5D' }} variant="rounded">
                1
            </Avatar>
          </Card>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Card sx={{display:'flex', justifyContent:'space-between'}}>
            <Box>
              <Typography fontWeight='bold'>card 2</Typography>
              <Typography variant='h4' fontWeight='bold'>text</Typography>
              <Typography variant='h6' mt={1}>text</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#222B5D' }} variant="rounded">
                2
            </Avatar>
          </Card>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Card sx={{display:'flex', justifyContent:'space-between'}}>
            <Box>
              <Typography fontWeight='bold'>card 3</Typography>
              <Typography variant='h4' fontWeight='bold'>text</Typography>
              <Typography variant='h6' mt={1}>text</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#222B5D' }} variant="rounded">
                3
            </Avatar>
          </Card>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Card sx={{display:'flex', justifyContent:'space-between'}}>
            <Box>
              <Typography fontWeight='bold'>card 4</Typography>
              <Typography variant='h4' fontWeight='bold'>text</Typography>
              <Typography variant='h6' mt={1}>text</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#222B5D' }} variant="rounded">
                4
            </Avatar>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard