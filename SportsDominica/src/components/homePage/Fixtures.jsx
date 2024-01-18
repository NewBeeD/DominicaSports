import { Paper, Box, Stack, Typography, Card, CardHeader, CardContent, CardMedia, CardActions } from "@mui/material"


import GetFixtures from "../../modules/Homepage/Fixtures/FixturesDataFetch";

import { useSelector } from 'react-redux';


function SortPoints(a, b) {
  return b.Points - a.Points;
}




const FixturesData = () => {

  GetFixtures()

  let fixtures_raw = useSelector((state) => state.fixtures)
  fixtures_raw = fixtures_raw[0]

  // console.log(fixtures_raw);



  return(

    <Box marginTop={0} width={{ xs: '90%'}} margin='auto' sx={{ backgroundColor: {xs: '#F9F9F9', sm: 'white'}, border: '1px solid #D3E1FF', borderRadius: {xs: '4px'}}}>

      <Typography variant="h6" sx={{ textAlign: 'center', color: 'blue'}}>Game Fixtures</Typography>

      {fixtures_raw && fixtures_raw.slice(0,4).map((item, idx) => {

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

                  {item.AwayScore? (<Typography style={{ fontSize: 13, fontWeight: 900, color: 'blue' }}>{item.AwayScore}</Typography>): (<Typography variant="subtitle2" fontStyle={{ fontWeight: 400}}>{item.Time} pm</Typography>)}
                </Stack>

              </Stack>

              <Box >

                <Typography style={{ fontSize: 12 }} sx={{ textAlign: 'center', color: 'blue'}}>{item.League}</Typography>

              </Box>

              

            </Card>
            
          </Box>

        )})}

        <Box>
          <Typography style={{ fontSize: 13, fontWeight: 'bold'}}  sx={{ textAlign: 'center', paddingY: {xs: '5px'}}}>

            View All Fixtures

          </Typography>
        </Box>

     


    </Box>
  )

  // const queryObj = { populate: ['players'] }

  // console.log(qs.stringify{queryObj});

  // GroupingFixturesByDate(dfaData)

}

export default FixturesData