import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

// 1. IMPORTE O PROVIDER E A STORE
import { Provider } from 'react-redux'
import { store } from './store' // (Confirme que o caminho é 'src/store/index.ts')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* 2. ENVOLVA O <App /> COM O <Provider /> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// ... (o resto do seu arquivo, como reportWebVitals, fica igual)
reportWebVitals()
