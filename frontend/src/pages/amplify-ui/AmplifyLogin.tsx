import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { useState } from "react";

const formFields = {

    signUp: {
        email: {
            order: 1
        },
        preferred_username: {
            label: "Username",
            order: 2,
            isRequired: true
        },
        password: {
            order: 3
        },
        confirm_password: {
            order: 4
        },


    },
};

export default function AmplifyLogin(){
    //TODO: Stop it from touching the  navbar via space or centering, let's just getr back on this horse one leg at a time.
    return <div className="flex justify-center mt-5">
        <Authenticator formFields={formFields}/>
    </div>
}