import { Col, Container, Row, Stack } from "react-bootstrap";
import Picture from "../components/Picture";
import left from "../images/left.jpg"
import right from "../images/right.jpg"
import Tag from "../components/Tag";
import Pictures from "../components/Pictures";


export default function Details(){
    return (
        <Container className="border-2 border border-dark my-1 mx-auto">
            {/* TODO: Fix sizing? */}
            <Row xs={1} lg={2}>
                <Col>
                    <Pictures left={left} right={right} leftAlt="Left" rightAlt="Right"/>
                </Col>
                {/* <Stack direction="horizontal" gap={1}>
                    <Row xs={2}>
                        <Col className="p-0">
                            <Picture src={left} alt={"Left"} ></Picture>
                        </Col>

                        <Col className="p-0">
                            <Picture src={right} alt={"Right"}></Picture>
                        </Col>
                    </Row>       
                </Stack> */}
                <Col>
                    {/* TODO: Fix */}
                    <h1 className="mb-0" id="title">Rujinu close</h1>
                    <p className="mt-0" id="uploader">Uploaded by <a href="#">me</a></p>
                    <p id="description">Rumi and Jinu are embracing each other with their faces up against each other</p>
                    <p className="mb-0">Source:</p>
                    <p className="my-0"><a href="#">Pinterest</a></p>
                    <p className="mt-0"><a href="#">Instagram</a></p>
                    <Tag name="KPDH"/>
                    <Tag name="Rumi" />
                    <Tag name="Jinu" />
                    <Tag name="Lovers" />
                    <Tag name="Demon" />
                    <Tag name="Hugging" />
                    <Tag name="Romantic" />

                    
                </Col>
            </Row>
        </Container>
    )
}