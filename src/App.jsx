import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </>
  )
}

export default App
