import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

export default function AmplifyLogin(){
    //TODO: Stop it from touching the  navbar via space or centering, let's just getr back on this horse one leg at a time.
    return <>
        <Authenticator/>
    </>
}