import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import Store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={Store}>
  <App />
</Provider>
  
)