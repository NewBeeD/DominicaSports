import { combineReducers } from "@reduxjs/toolkit";
import fixtureReducer from '../features/Fixtures/FixturesSlice'
import articlesReducer from '../features/TrendingArticles/TrendingArticlesSilce'
import pointReducer from '../features/PointsTable/PointsSlice'

const rootReducer = combineReducers({

  articles: articlesReducer,
  fixtures: fixtureReducer,
  points: pointReducer
})

export default rootReducer;