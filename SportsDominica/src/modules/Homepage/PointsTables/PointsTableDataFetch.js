import { useQuery } from '@tanstack/react-query';
import qs from 'qs'
import axios from 'axios'

import { useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { populate } from '../../../features/PointsTable/PointsSlice';



import PointsTableStructureDisplay from '../PointsTables/PointsTableStructuredDisplay'



export default function GetPoints(){

  const dispatch = useDispatch() 
  

  let structured_data;
  // const [structuredDataFinal, setStructuredDataFinal]= useState(null)

  const fetchDataFromStrapi = async (queryParams) => {
    const queryString = qs.stringify(queryParams);
    const apiUrl = `http://localhost:1337/api/dfa-premier-league-men-tables?${queryString}`;
  
    const response = await axios.get(apiUrl);
    return response.data;
  }
  
  
  const queryParams = {
  
    populate: {
      dfa_team: {
        populate: true
      }

    }   
  }

  const { isLoading, data, error} = useQuery({
    queryKey: ['third-query'], 
    queryFn: () => fetchDataFromStrapi(queryParams).then((value) =>{

      // Learn redux
      structured_data = PointsTableStructureDisplay(value)

      dispatch(populate(structured_data))
      return value
    })
  })
  
  
  // return structured_data;
}

