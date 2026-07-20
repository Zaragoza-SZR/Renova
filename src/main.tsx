import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './main/Layout'
import HomePage from './pages/Home'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        
      </Route>
    </Routes>
  </BrowserRouter>
)