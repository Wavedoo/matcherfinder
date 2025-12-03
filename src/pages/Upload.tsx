import { Button, Container, Form } from "react-bootstrap";
import MatcherFormGroup from "../components/MatcherFormControl";
import Pictures from "../components/Pictures";
import { useNavigate } from "react-router";
import { useAuthenticator } from "@aws-amplify/ui-react";
import ImageFileInput from "../components/ImageFileInput";

export default function Upload(){
    const navigate = useNavigate();
    const { authStatus } = useAuthenticator(context => [context.authStatus]);

    if(authStatus !== 'authenticated'){
        navigate("/login")
    }
    return <Form>
        <Container className="border border-2 border-dark py-2 px-5 my-3 justify-content-center rounded-3">
            <Form>
                <MatcherFormGroup controlId={"title"} label={"Title"} type={"text"} required/>
                <ImageFileInput controlId={"left"} label={"Left picture"} />
                <ImageFileInput controlId={"right"} label={"Right picture"} />
                <Pictures left={""} right={""} leftAlt={""} rightAlt={""}></Pictures>
                <MatcherFormGroup controlId={"description"} label={"Description"} type={"text"} required/>
                {/* TODO: Sources list */}
                {/* TODO: Custom tag element */}
                <Button type="submit">Upload</Button>
            </Form>

        </Container>
    </Form>
}