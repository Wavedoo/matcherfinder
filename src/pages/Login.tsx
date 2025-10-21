import { Button, Container, Form } from "react-bootstrap";
import MatcherFormGroup from "../components/MatcherFormControl";

export default function Login(){
    return <>
        <Form>
            {/* "border border-2 border-dark py-2 px-5 my-3 justify-content-center rounded-3 */}
            { }
            
            <Container className="border border-2 border-dark py-2 px-5 my-3 justify-content-center rounded-3" style={{maxWidth: "600px"}}>
                {/* or type=email */}
                <MatcherFormGroup controlId="username" label="Username" type="text"/>
                <a href="#" className="mx-auto d-block w-50 text-center">Forgot username?</a>
                <MatcherFormGroup controlId="password" label="Password" type="password" />
                <a href="#" className="mx-auto d-block w-50 text-center">Forgot password?</a>
                <br/>
                <a href="./register" className="d-block w-25 mx-auto text-center">Not registered?</a>

                <Button type="submit" variant="primary" className="d-block mt-3 mx-auto rounded-pill">Sign in</Button>
            </Container>
        </Form>
    </>

    
}