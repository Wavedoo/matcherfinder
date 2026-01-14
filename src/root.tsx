import { Authenticator } from "@aws-amplify/ui-react";
import { StrictMode } from "react";
import {
    Links,
    Meta,
    Outlet,
    RouterProvider,
    Scripts,
    ScrollRestoration,
} from "react-router";
import { Amplify } from 'aws-amplify';
import outputs from "../amplify_outputs.json"


import './css/main.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/custom.scss'
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs)

export function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>My App</title>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function Root() {
    return (
        <StrictMode>
            <Authenticator.Provider> 
                <Outlet/>
            </Authenticator.Provider>
        </StrictMode>
    );
}
