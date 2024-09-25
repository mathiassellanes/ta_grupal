import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { DarkModeProvider } from './helpers/DarkMode.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>,
)
