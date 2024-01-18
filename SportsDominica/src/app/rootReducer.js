import { combineReducers } from "@reduxjs/toolkit";
import fixtureReducer from '../features/Fixtures/FixturesSlice'
import articlesReducer from '../features/TrendingArticles/TrendingArticlesSilce'

const rootReducer = combineReducers({

  articles: articlesReducer,
  fixtures: fixtureReducer
})

export default rootReducer;