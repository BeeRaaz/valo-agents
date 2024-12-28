import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AgentsListing from './components/AgentsListing.jsx'
import { DataProvider } from './context/DataContext.jsx'
import AgentSingle from './components/AgentSingle.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <AgentsListing />,
      },
      {
        path: '/:id',
        element: <AgentSingle />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
    <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
)
