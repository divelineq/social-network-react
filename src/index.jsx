import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import store from './redux/redux-store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { createRoot } from 'react-dom/cjs/react-dom.production.min'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>, document.getElementById('root'))

// const root = createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>)
// после изменения react-script с версии 2 до 5 перестало работать 'React 18.0.0'
