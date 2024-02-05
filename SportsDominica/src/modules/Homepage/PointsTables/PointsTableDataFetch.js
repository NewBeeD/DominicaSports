import { useQuery } from '@tanstack/react-query';
import qs from 'qs'
import axios from 'axios'

import { useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { populate } from '../../../features/PointsTable/PointsSlice';



import PointsTableStructureDisplay from '../PointsTables/PointsTableStructuredDisplay'



export default function GetPoints(league){

  const dispatch = useDispatch() 
  

  let structured_data;
  // const [structuredDataFinal, setStructuredDataFinal]= useState(null)

  const fetchDataFromStrapi = async (queryParams) => {

    const queryString = qs.stringify(queryParams);
    let apiUrl;

   

    // TODO: Have a conditional statement here to change the apiUrl for different league tables

    switch (league) {


      case 'homepage':
        apiUrl = `https://strapi-dominica-sport.onrender.com/api/dfa-premier-league-men-tables?${queryString}`;
        break;

      case 'dfa_premier_league':
        apiUrl = `https://strapi-dominica-sport.onrender.com/api/dfa-premier-league-men-tables?${queryString}`;       
        break;

      case 'dfa_division_one':
        apiUrl = `https://strapi-dominica-sport.onrender.com/api/dfa-division-one-men-tables?${queryString}`;       
        break;

      case 'dfa_women':
        apiUrl = `https://strapi-dominica-sport.onrender.com/api/dfa-women-tables?${queryString}`;       
        break;

      case 'daba_premier_league':
        apiUrl = `https://strapi-dominica-sport.onrender.com/api/daba-premier-league-men-tables?${queryString}`;       
        break;


      case 'daba_division_one':
        apiUrl = `https://strapi-dominica-sport.onrender.com/api/daba-division-one-men-tables?${queryString}`;
        break;

      case 'daba_women':
        apiUrl = `https://strapi-dominica-sport.onrender.com/api/daba-women-tables?${queryString}`;       
        break;

      case 'dava_division_one_men':
        apiUrl = `https://strapi-dominica-sport.onrender.com/api/dava-division-one-men-tables?${queryString}`;       
        break;

      case 'dava_division_two_men':
        apiUrl = `https://strapi-dominica-sport.onrender.com/api/dava-division-two-men-tables?${queryString}`;       
        break;

      case 'dava_women':
        apiUrl = `https://strapi-dominica-sport.onrender.com/api/dava-women-tables?${queryString}`;       
        break;
    
      default:
        break;
    }

    // apiUrl = `https://strapi-dominica-sport.onrender.com/api/dfa-premier-league-men-tables?${queryString}`;

  
    const response = await axios.get(apiUrl);
    return response.data;
  }
  
  
  const queryParams = {
  
    populate: {
      dfa_team: {
        populate: true
      },
      daba_team: {
        populate: true
      }

    }   
  }

  const { isLoading, data, error} = useQuery({
    queryKey: ['Points-query'], 
    queryFn: () => fetchDataFromStrapi(queryParams).then((value) =>{

      // Learn redux
      structured_data = PointsTableStructureDisplay(value, league)

      dispatch(populate(structured_data))
      return value
    })
  })
  
  
  // return structured_data;
}

