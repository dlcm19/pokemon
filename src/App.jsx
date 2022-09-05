import { Route, Routes } from 'react-router-dom'
import Root from './components/Root'
import PokeDex from './components/PokeDex'


import PokeDexId from './components/PokeDexId'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Root />} />
        <Route>
          <Route path='/PokeDex' element={<PokeDex />} />
          <Route path='PokeDexId/:name' element={<PokeDexId />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
