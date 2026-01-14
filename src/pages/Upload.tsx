// import MatcherFormGroup from "../components/MatcherFormControl";
import Pictures from "../components/Pictures";
import { useNavigate } from "react-router";
import { useAuthenticator } from "@aws-amplify/ui-react";
import ImageFileInput from "../components/ImageFileInput";
import useLog from "../hooks/useLog";
import Textbox from "../components/Textbox";

export default function Upload(){
    const navigate = useNavigate();
    const { authStatus } = useAuthenticator(context => [context.authStatus]);

    useLog(authStatus)
    // if(authStatus !== 'authenticated'){
    //     navigate("/login")
    // }
    return <form className="border-2 border-dark py-2 px-5 m-3 justify-content-center rounded-3">
            {/* <MatcherFormGroup controlId={"title"} label={"Title"} type={"text"} required/> */}
            <Textbox id={"title"} label={"Title"} required />
            <ImageFileInput id={"left"} label={"Left picture"} />
            <ImageFileInput id={"right"} label={"Right picture"} />
            {/* <ImageFileInput controlId={"left"} label={"Left picture"} />
            <ImageFileInput controlId={"right"} label={"Right picture"} /> */}
            <Pictures left={""} right={""} leftAlt={""} rightAlt={""}></Pictures>
            <Textbox id={"description"} label="Description" required/>
            {/* <MatcherFormGroup controlId={"description"} label={"Description"} type={"text"} required/> */}
            {/* TODO: Sources list */}
            {/* TODO: Custom tag element */}
        <button type="submit" className="my-3 bg-blue-300 border rounded-sm p-2 hover:bg-blue-400">Upload</button>
    </form>
}