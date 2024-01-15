import { configureStore} from '@reduxjs/toolkit'
import { articleSlice } from '../features/TrendingArticles/TrendingArticlesSilce'

export const store = configureStore({

  reducer: {
    articles: articleSlice.reducer,
  },
})