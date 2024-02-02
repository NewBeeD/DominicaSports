import { Route, Routes} from 'react-router-dom'

import HomePage from "./pages/HomePage"
import Article from "./pages/Article"
import "./App.css"
import DFA from './pages/DFA/DFA'
import DABA from './pages/DABA/DABA'
import DAVA from './pages/DAVA/DAVA'
import DNA from './pages/DNA/DNA'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import LeagueStanding
 from './pages/Tables/LeagueStanding'

function App() {


  return (
    
    <div className="app-background-color">

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<Article />} />

        {/* Home Pages for each Sport */}
        
        <Route path='/DABA/Home' element={<DABA />} />
        <Route path='/DAVA/Home' element={<DAVA />} />
        <Route path='/DNA/Home' element={<DNA />} />
        {/* End of Home Pages for each Sport */}

        {/* DFA PAGES */}
        <Route path='/DFA/Home' element={<DFA />} />
        <Route path='/DFA/Premier-League' element={<DFA />} />
        <Route path='/DFA/First-Division' element={<DFA />} />
        <Route path='/DFA/Women-League' element={<DFA />} />
        <Route path='/DFA/Tables' element={<DFA />} />
        <Route path='/DFA/Teams' element={<DFA />} />
        <Route path='/DFA/Stats' element={<DFA />} />
        {/* End of DFA Pages */}

        {/* DABA PAGES */}
        {/* <Route path='/DABA/Home' element={<DFA />} />
        <Route path='/DABA/Home' element={<DFA />} />
        <Route path='/DABA/Premier-League' element={<DFA />} />
        <Route path='/DABA/First-Division' element={<DFA />} />
        <Route path='/DABA/Women-League' element={<DFA />} />
        <Route path='/DABA/Tables' element={<DFA />} />
        <Route path='/DABA/Teams' element={<DFA />} />
        <Route path='/DABA/Stats' element={<DFA />} /> */}
        {/* End of DABA Pages */}


        {/* Tables and Fixtures */}

        <Route path='/Table' element={<LeagueStanding />} />

        {/* End of Tables and Fixtures */}



      </Routes>

      <ReactQueryDevtools initialIsOpen={false} />     
    </div>
  )
}

export default App
