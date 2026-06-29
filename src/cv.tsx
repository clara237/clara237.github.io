import React from 'react'
import ReactDOM from 'react-dom/client'
import CV from './components/CV'
import { I18nProvider } from './i18n'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <CV />
    </I18nProvider>
  </React.StrictMode>,
)
