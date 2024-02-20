import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './styles/global.js'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme.js'

import { Page } from './page'
import { Signin } from './page/router/Signin/index.jsx'
import { ErrorPage } from './page/router/ErrorPage/index.jsx'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Signup } from './page/router/signup/index.jsx'
import { Contact } from './page/router/contact/index.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Page/>,
    errorElement: <ErrorPage/> 
  },
  {
    path: "signin",
    element: <Signin/>,
    errorElement: <ErrorPage/> 
  },
  {
    path: "signup",
    element: <Signup/>
  },
  {
    path: "contact",
    element: <Contact/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
