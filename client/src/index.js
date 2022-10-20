import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.css'
import store from './redux/Store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          position="top-center"
          autoClose={500}
          closeOnClick={true}
          pauseOnHover={false}
          theme="dark"
        ></ToastContainer>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
