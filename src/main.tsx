import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.scss'
// import App from './App.tsx'
import { RouterProvider } from 'react-router'
import { router } from './routes.ts'
import { Amplify } from 'aws-amplify';
import outputs from "../amplify_outputs.json"
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


//TODO: Undo noUnusuedLocals and noUnusuedParameters to fix TS6133
Amplify.configure(outputs)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Authenticator.Provider>
      <RouterProvider router={router} />
    </Authenticator.Provider>
  </StrictMode>,
)
