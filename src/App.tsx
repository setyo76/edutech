import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MaterialDetail from './pages/MaterialDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/materi/:level" element={<MaterialDetail />} />
    </Routes>
  )
}

export default App
