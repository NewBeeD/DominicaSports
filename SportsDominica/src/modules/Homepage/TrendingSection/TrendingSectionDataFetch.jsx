import { useQuery } from '@tanstack/react-query';
import qs from 'qs'
import axios from 'axios'

import { useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { populate } from '../../../features/TrendingArticles/TrendingArticlesSilce';



import ArticlesStructuredDisplay from '../TrendingSection/TrendingSectionDataRestructure'



export default function GetArticles(){

  const dispatch = useDispatch()
  

  let structured_data;
  const [structuredDataFinal, setStructuredDataFinal]= useState(null)

  const fetchDataFromStrapi = async (queryParams) => {
    const queryString = qs.stringify(queryParams);
    const apiUrl = `http://localhost:1337/api/articles?${queryString}`;
  
    const response = await axios.get(apiUrl);
    return response.data;
  }
  
  
  const queryParams = {
  
    populate: {
      Article_img: {
        populate: true
      },

      dfa_leagues: {
        populate: true
      }

    }   
  }

  const { isLoading, data, error} = useQuery({
    queryKey: ['first-Query'], 
    queryFn: () => fetchDataFromStrapi(queryParams).then((value) =>{

      // Learn redux
      structured_data = ArticlesStructuredDisplay(value)

      // console.log("data",structured_data);

      dispatch(populate(structured_data))

      

      return value
    })
  })
  
  
  // return structured_data;
}

