import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux' 
import { myStore } from './redux.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
  <Provider store={myStore}>
  <App />
  </Provider>
   
  </BrowserRouter>
   
  // </StrictMode>,
)
