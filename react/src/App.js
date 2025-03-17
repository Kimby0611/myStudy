import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './chapter_03/Library';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Library/>}/>
      </Routes>
    </Router>
  )
}

export default App