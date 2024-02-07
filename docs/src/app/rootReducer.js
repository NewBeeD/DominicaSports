import { combineReducers } from "@reduxjs/toolkit";
import fixtureReducer from '../features/Fixtures/FixturesSlice'
import articlesReducer from '../features/TrendingArticles/TrendingArticlesSilce'
import pointReducer from '../features/PointsTable/PointsSlice'
import VideoReducer from '../features/Video/VideoSlice'

const rootReducer = combineReducers({

  articles: articlesReducer,
  fixtures: fixtureReducer,
  points: pointReducer,
  video: VideoReducer
})

export default rootReducer;