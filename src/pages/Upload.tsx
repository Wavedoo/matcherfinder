import { Button, Container, Form } from "react-bootstrap";
import MatcherFormGroup from "../components/MatcherFormControl";
import Pictures from "../components/Pictures";

export default function Upload(){
    return <Form>
        <Container className="border border-2 border-dark py-2 px-5 my-3 justify-content-center rounded-3">
            <MatcherFormGroup controlId={"title"} label={"Title"} type={"text"}/>
            <MatcherFormGroup controlId={"left"} label={"Left picture"} type={"file"}/>
            <MatcherFormGroup controlId={"right"} label={"Right picture"} type={"file"} />
            <Pictures left={""} right={""} leftAlt={""} rightAlt={""}></Pictures>
            <MatcherFormGroup controlId={"description"} label={"Description"} type={"text"} />
            {/* TODO: Sources list */}
            {/* TODO: Custom tag element */}
            <Button type="submit">Upload</Button>
        </Container>
    </Form>
}