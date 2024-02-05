import { useQuery } from '@tanstack/react-query';
import qs from 'qs'
import axios from 'axios'


// Redux
import { useDispatch, useSelector } from 'react-redux'
import { populate } from '../../features/Video/VideoSlice';
import VideoStructure from './VideoStructure';






export default function GetFixtures(){

  const dispatch = useDispatch()


  const fetchDataFromStrapi = async (queryParams) => {
    const queryString = qs.stringify(queryParams);
    const apiUrl = `https://strapi-dominica-sport.onrender.com/api/videos?${queryString}`;
  
    const response = await axios.get(apiUrl);
    return response.data;
  }
  
  
  const queryParams = {
  
    populate: {
      venue: {
        populate: true
      },

    }   
  }

  const { isLoading, data, error} = useQuery({
    queryKey: ['Video-Query'], 
    queryFn: () => fetchDataFromStrapi(queryParams).then((value) =>{


      let fixtures_dat_structured = VideoStructure(value)
      

      dispatch(populate(fixtures_dat_structured))
      return value
    })
  })
  

}

