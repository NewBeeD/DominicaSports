

import { useQuery } from '@tanstack/react-query';
import qs from 'qs'
import axios from 'axios'

import { useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { populate } from '../../features/TablesPage/TablesSlice'



import ArticlesStructuredDisplay from '../TrendingSection/TrendingSectionDataRestructure'



export default function GetArticles(){

  const dispatch = useDispatch()

  let structured_data;

  const fetchDataFromStrapi = async (queryParams) => {
    const queryString = qs.stringify(queryParams);
    const apiUrl = `https://strapi-dominica-sport.onrender.com/api/articles?${queryString}`;
  
    const response = await axios.get(apiUrl);
    return response.data;
  }
  
  
  const queryParams = {
  
    populate: {
      Article_img: {
        populate: true
      },

      all_league: {
        populate: true
      },

      Article_Img: {
        populate: true
      }

    }   
  }

  const { isLoading, data, error, isFetching} = useQuery({
    queryKey: ['Articles-Query'], 
    queryFn: () => fetchDataFromStrapi(queryParams).then((value) =>{

      structured_data = ArticlesStructuredDisplay(value)
      dispatch(populate(structured_data))
      return value
    }), 
  })
  
}

