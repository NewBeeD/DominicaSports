import app from "../../config/firebaseConfig"
import { useState, useEffect } from "react"

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';




const ArticleReads = ({ articleId }) => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Reference to the specific article's read count in Firebase
    const articleRef = app.database().ref(`articles/${articleId}/readCount`);

    // Listen for changes in the read count
    articleRef.on('value', (snapshot) => {
      const count = snapshot.val();
      if (count !== null) {
        setCount(count);
      }
    });

    // Increment the read count when the component mounts
    articleRef.transaction((currentCount) => {
      return (currentCount || 0) + 1;
    });

    // Cleanup function to unsubscribe from Firebase listener
    return () => articleRef.off();
  }, [articleId]);


  return (
    <div>ArticleReads</div>
  )
}

export default ArticleReads