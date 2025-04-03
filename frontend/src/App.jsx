import { Box } from '@chakra-ui/react'
import { Routes,Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { CreatePage } from './pages/CreatePage';
import { Navbar } from './components/Navbar';
import {useColorModeValue } from "../src/components/ui/color-mode";

function App() {
  return (
    <Box maxH={'100vh'} bg={useColorModeValue('white','black')}>
        <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route  path='/create' element={<CreatePage/>}/>
      </Routes>
    </Box>
  )
}

export default App
