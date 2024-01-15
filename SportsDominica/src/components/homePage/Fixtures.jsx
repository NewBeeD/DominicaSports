import { Paper, Box, Stack, Typography, Card, CardHeader, CardContent, CardMedia, CardActions } from "@mui/material"

import { useState } from "react"
import { useMutation, useQuery} from '@tanstack/react-query' 
import qs from 'qs'
import axios from 'axios'

import {dfa_prem_fixtures} from '../../assets/fixtures/dfa_prem_fixtures.json'
import {daba_prem_fixtures} from '../../assets/fixtures/daba_prem_fixtures.json'

import GroupingFixturesByDate from "../../modules/Homepage/FixturesDisplay"


function SortPoints(a, b) {
  return b.Points - a.Points;
}

const fetchDataFromStrapi = async (queryParams) => {
  const queryString = qs.stringify(queryParams);
  const apiUrl = `http://localhost:1337/api/teams?${queryString}`;

  const response = await axios.get(apiUrl);
  return response.data;
}



const FixturesData = ({leagueName}) => {

  const [dfaData, setDfaData] = useState(dfa_prem_fixtures)
  const [dabaData, setDabaData] = useState(daba_prem_fixtures)

  const queryParams = {

    populate: {
      dfa_players: {
        populate: true
      }
    }   
  }

  const { isLoading, data, error} = useQuery({
    queryKey: ['first-Query'], 
    queryFn: () => fetchDataFromStrapi(queryParams)
  })



  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(error){
    return <h2>Error: {error.message}</h2>
  }
  return(

    <Box marginTop={5}>
      {data?.data.map((items) => {

        return(
          <div key={items.id}>
            {items.id}
          </div>
          )
      })}

    </Box>
  )

  // const queryObj = { populate: ['players'] }

  // console.log(qs.stringify{queryObj});

  // GroupingFixturesByDate(dfaData)

}

export default FixturesData