import { Navbar, Nav, Container, Form, /* Button */ } from "react-bootstrap"


export default function MatcherNavbar(){
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
                    <Nav.Link href="/login">Log in</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}