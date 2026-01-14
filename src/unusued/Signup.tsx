import { Button, Container, Form } from "react-bootstrap";
import MatcherFormGroup from "../components/MatcherFormControl";

export default function Signup(){
    return <>
        <Form>
            {/* "border border-2 border-dark py-2 px-5 my-3 justify-content-center rounded-3 */}
            { }
            <Container className="border border-2 border-dark py-2 px-5 my-3 justify-content-center rounded-3" style={{ maxWidth: "600px" }}>
                {/* or type=email */}
                <MatcherFormGroup controlId="email" label="Email" type="email" />
                <MatcherFormGroup controlId="username" label="Username" type="text" />
                <MatcherFormGroup controlId="password" label="Password" type="password" />
                <MatcherFormGroup controlId="confirmPassword" label="Confirm password" type="password" />
                <h1>IF YOU SEE THIS DONT  SIGN UP THERE IS NO PRIVACY POLICY</h1>
                {/* Add rules somewhere */}
                <br />
                <a href="./login">Already registered?</a>

                <Button type="submit" variant="primary" className="d-block mt-3 rounded-pill">Sign up</Button>

            </Container>
        </Form>
    </>
}