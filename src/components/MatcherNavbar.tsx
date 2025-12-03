import { Navbar, Nav, Container, Form, /* Button */ } from "react-bootstrap"
import { useAuthenticator } from "@aws-amplify/ui-react"

export default function MatcherNavbar(){
    const { authStatus, signOut } = useAuthenticator(context => [context.authStatus]);
    return <Navbar expand="lg" variant="dark" className="bg-dark">
        <Container fluid>
            <Navbar.Brand href="/">
                Matching image finder
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapse" />
            <Navbar.Collapse id="navbarCollapse">
                {/* Do I need to do <Form inline> like in the docs? */}
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    {/* Maybe I don't need a button. Maybe a small icon button but not that huge search button */}
                    {/* <Button variant="outline-success" type="submit"></Button> */}
                </Form>
                <Nav>
                    <Nav.Link href="/upload">Upload</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    {
                        authStatus !== 'authenticated' ? <Nav.Link href="/login">Log in</Nav.Link> : <button onClick={signOut}>Sign out</button>
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}