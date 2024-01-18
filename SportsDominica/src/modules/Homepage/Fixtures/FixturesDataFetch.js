import { useQuery } from '@tanstack/react-query';
import qs from 'qs'
import axios from 'axios'

import { useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { populate } from '../../../features/Fixtures/FixturesSlice'

import fixturesSetup from '../Fixtures/FixturesDisplay'




export default function GetFixtures(){

  const dispatch = useDispatch()
  

  let structured_data;
  const [structuredDataFinal, setStructuredDataFinal]= useState(null)

  const fetchDataFromStrapi = async (queryParams) => {
    const queryString = qs.stringify(queryParams);
    const apiUrl = `http://localhost:1337/api/fixtures?${queryString}`;
  
    const response = await axios.get(apiUrl);
    return response.data;
  }
  
  
  const queryParams = {
  
    populate: {
      venue: {
        populate: true
      },

      all_league: {
        populate: true
      }

    }   
  }

  const { isLoading, data, error} = useQuery({
    queryKey: ['Second-Query'], 
    queryFn: () => fetchDataFromStrapi(queryParams).then((value) =>{


      let fixtures_dat_structured = fixturesSetup(value)
      

      dispatch(populate(fixtures_dat_structured))
      return value
    })
  })
  

}

