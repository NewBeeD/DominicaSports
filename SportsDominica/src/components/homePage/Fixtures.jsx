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



  return(

    <Box marginTop={5}>

      {fixtures_raw && fixtures_raw.map((item, idx) => {

        return(
          
          <Box key={idx}>

            <Card>

              <CardHeader title={item.Date} />

            </Card>
            
          </Box>

        )})}
     


    </Box>
  )

  // const queryObj = { populate: ['players'] }

  // console.log(qs.stringify{queryObj});

  // GroupingFixturesByDate(dfaData)

}

export default FixturesData