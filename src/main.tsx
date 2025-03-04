import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'
import './css/global.css'
import { AuthNutritionistProvider } from './context/auth/Nutritionist/AuthNutritionist.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthNutritionistProvider>
        <App />
        <Toaster />
      </AuthNutritionistProvider>
    </BrowserRouter>
  </StrictMode>
)
