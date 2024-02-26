import { Paper, Box, Stack, Typography, Card, CardHeader, CardContent, CardMedia, CardActions, Skeleton } from "@mui/material"


import GetFixtures from "../../modules/Homepage/Fixtures/FixturesDataFetch";

import { useSelector } from 'react-redux';




const FixturesData = ({ page, type }) => {

  GetFixtures()

  let fixtures_raw = useSelector((state) => state.fixtures)
  fixtures_raw = fixtures_raw && fixtures_raw[0]? fixtures_raw[0].filter(item => item.League == 'DFA'): [];


  if( page === 'home'){

    return(

      <Box marginTop={0} width={{ xs: '90%'}} margin='auto' sx={{ backgroundColor: {xs: '#F9F9F9', sm: 'white'}, border: '1px solid #D3E1FF', borderRadius: {xs: '4px'}}}>
  
        <Typography variant="h6" sx={{ textAlign: 'center', color: 'blue'}}>Game Fixtures</Typography>
  
        {fixtures_raw ? (fixtures_raw.filter(item => item.Complete != 'Yes' ).slice(0,4).map((item, idx) => {
  
          return(
            
            <Box key={idx} width={{xs: '100%'}} margin={{xs:'auto'}}>
  
              <Card sx={{ marginY: {xs: 0}, height: 'auto', boxShadow: 'none', borderBottom: {xs: '1px solid #D3E1FF'}, borderRadius: {xs: '4px'}}}>
  
                <Stack direction={{xs: 'row'}} justifyContent='space-between' marginX={2} paddingTop={1}>
  
                  <Stack direction='column' spacing={0.5}>
  
                    <Typography style={{ fontSize: 12, fontWeight: 'bold' }}>{item.Home}</Typography>
                    <Typography style={{ fontSize: 12, fontWeight: 'bold' }}>{item.Away}</Typography>
  
                  </Stack>
  
                  <Stack direction='column' spacing={0.5}>
                    {item.HomeScore? (<Typography style={{ fontSize: 13, fontWeight:900, color: 'blue' }}>{item.HomeScore}</Typography>) :(<Typography style={{ fontSize: 12, fontWeight: 'bold' }}>{item.Date}</Typography>)}
  
                    {item.AwayScore? (<Typography style={{ fontSize: 13, fontWeight: 900, color: 'blue' }}>{item.AwayScore}</Typography>): (<Typography  fontStyle={{ fontWeight: 400, fontSize: 12.5}}>{item.Time}</Typography>)}
                  </Stack>
  
                </Stack>
  
                <Box >
  
                  <Typography style={{ fontSize: 12 }} sx={{ textAlign: 'center', color: 'blue'}}>{item.League}</Typography>
  
                </Box>
  
                
  
              </Card>
              
            </Box>
  
          )})): <Skeleton variant="rectangular" width={310} height={60} />}
  
          {/* <Box>
            <Typography style={{ fontSize: 13, fontWeight: 'bold'}}  sx={{ textAlign: 'center', paddingY: {xs: '5px'}}}>
  
              View All Fixtures
  
            </Typography>
          </Box> */}
  
       
  
  
      </Box>
    )

  }

  else if(page === 'dfa'){

    return(

      <Box marginTop={2.3} width={{ xs: '95%'}} marginX='auto' sx={{ backgroundColor: {xs: '#F9F9F9', sm: 'white'}, border: '1px solid #D3E1FF', borderRadius: {xs: '4px'}}}>
  
        <Typography variant="h6" sx={{ textAlign: 'center', color: 'blue', }}>Game Fixtures</Typography>
  
        {fixtures_raw && type === 'now' ? (fixtures_raw.filter(item => item.Complete != 'Yes').map((item, idx) => {
  
          return(
            
            <Box key={idx} width={{xs: '100%'}} margin={{xs:'auto'}}>
  
              <Card sx={{ marginY: {xs: 0}, height: 'auto', boxShadow: 'none', borderBottom: {xs: '1px solid #D3E1FF'}, borderRadius: {xs: '4px'}}}>
  
                <Stack direction={{xs: 'row'}} justifyContent='space-between' marginX={2} paddingTop={1}>
  
                  <Stack direction='column' spacing={0.5}>
  
                    <Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Home}</Typography>
                    <Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Away}</Typography>
  
                  </Stack>
  
                  <Stack direction='column' spacing={0.5}>
                    {item.HomeScore? (<Typography style={{ fontSize: 13, fontWeight:900, color: 'blue' }}>{item.HomeScore}</Typography>) :(<Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Date}</Typography>)}
  
                    {item.AwayScore? (<Typography style={{ fontSize: 13, fontWeight: 900, color: 'blue' }}>{item.AwayScore}</Typography>): (<Typography  fontStyle={{ fontWeight: 900, fontSize: 12.5}}>{item.Time}</Typography>)}
                  </Stack>
  
                </Stack>
  
                <Box >
  
                  <Typography style={{ fontSize: 12 }} sx={{ textAlign: 'center', color: 'blue'}}>{item.Cancelled === 'Yes'? 'Cancelled': item.League}</Typography>
  
                </Box>
  
                
  
              </Card>
              
            </Box>
  
          )})): type === 'past'? (fixtures_raw.filter(item => item.Complete === 'Yes').map((item, idx) => {
  
            return(
              
              <Box key={idx} width={{xs: '100%'}} margin={{xs:'auto'}}>
    
                <Card sx={{ marginY: {xs: 0}, height: 'auto', boxShadow: 'none', borderBottom: {xs: '1px solid #D3E1FF'}, borderRadius: {xs: '4px'}}}>

                  <Box marginTop={1} sx={{ display: {xs: 'flex'}, justifyContent: 'center'}}>

                    <Typography>
                      {type === 'past'? <Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Date}</Typography>: ''}
                    </Typography>
                    
                  </Box>

    
                  <Stack direction={{xs: 'row'}} justifyContent='space-between' marginX={2} paddingTop={1}>
    
                    <Stack direction='column' spacing={0.5}>
    
                      <Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Home}</Typography>
                      <Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Away}</Typography>
    
                    </Stack>
    
                    <Stack direction='column' spacing={0.5}>
                      {item.HomeScore? (<Typography style={{ fontSize: 13, fontWeight:900, color: 'blue' }}>{item.HomeScore}</Typography>) :(<Typography style={{ fontSize: 12, fontWeight: 900 }}>{item.Date}</Typography>)}
    
                      {item.AwayScore? (<Typography style={{ fontSize: 13, fontWeight: 900, color: 'blue' }}>{item.AwayScore}</Typography>): (<Typography  fontStyle={{ fontWeight: 900, fontSize: 12.5}}>{item.Time}</Typography>)}
                    </Stack>
    
                  </Stack>
    
                  <Box marginBottom={1}>
    
                    <Typography style={{ fontSize: 12 }} sx={{ textAlign: 'center', color: 'blue'}}>{item.Cancelled === 'Yes'? 'Cancelled': item.League}</Typography>
    
                  </Box>
    
                  
    
                </Card>
                
              </Box>
    
            )})): <Skeleton variant="rectangular" width={310} height={60} />}
  
          {/* <Box>
            <Typography style={{ fontSize: 13, fontWeight: 'bold'}}  sx={{ textAlign: 'center', paddingY: {xs: '5px'}}}>
  
              View All Fixtures
  
            </Typography>
          </Box> */}
  
       
  
  
      </Box>
    )

  }





}

export default FixturesData