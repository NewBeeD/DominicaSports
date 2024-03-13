import axios from 'axios';

import { useState, useEffect } from 'react';

import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';

import app from '../../firebaseConfig'
import { getDatabase, ref, set, push} from 'firebase/database'



const Comments = ({ articleId }) => {

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const submitComment = () => {
    // Submit a new comment
    axios.post('https://strapi-dominica-sport.onrender.com/api/comments', {
      content: newComment,
      article: articleId,
      // Add other necessary fields
    })
      .then(response => {
        setComments([...comments, response.data]);
        setNewComment('');
      })
      .catch(error => console.error('Error submitting comment:', error));
  };

  useEffect(()=>{

    


  }, [])



  
  return (
    <Card style={{ marginBottom: '16px' }}>
      <CardContent>
        <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <Avatar style={{ marginRight: '8px' }}>U</Avatar>
          <Typography variant="subtitle1">s</Typography>
        </Box>
        <Typography variant="body1">s</Typography>
        <Box style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
          {/* <Box>
            <span role="img" aria-label="Thumbs Up">👍</span> {reactions.thumbsUp}
          </Box>
          <Box>
            <span role="img" aria-label="Heart">❤️</span> {reactions.heart}
          </Box>
          <Box>
            <span role="img" aria-label="Smiley">😊</span> {reactions.smiley}
          </Box> */}
        </Box>
      </CardContent>
    </Card>
  )
}

export default Comments