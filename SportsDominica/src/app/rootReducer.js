import { combineReducers } from "@reduxjs/toolkit";
import fixtureReducer from '../features/Fixtures/FixturesSlice'
import articlesReducer from '../features/TrendingArticles/TrendingArticlesSilce'
import pointReducer from '../features/PointsTable/PointsSlice'
import tableReducer from "../features/TablesPage/TablesSlice";

const rootReducer = combineReducers({

  articles: articlesReducer,
  fixtures: fixtureReducer,
  points: pointReducer,
  tables: tableReducer
})

export default rootReducer;