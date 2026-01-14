import { Col, Container, Row, Stack } from "react-bootstrap";
import Picture from "../components/Picture";
import left from "../images/left.jpg"
import right from "../images/right.jpg"
import Tag from "../components/Tag";
import Pictures from "../components/Pictures";
import TailwindPictures from "../components/tailwind/Pictures";
import TailwindTag from "../components/tailwind/Tag"
import { Link, NavLink } from "react-router";

export default function Details() {
    return (
        // Look into getting rid of width constraints, for now I set up the cooler functionality and stop worrying about pixels
        <div className="
                       px-2 md:px-6 lg:px-10 xl:max-w-7xl mx-auto 
                        grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
                <TailwindPictures left={left} right={right} leftAlt="Left" rightAlt="Right" />
            </div>
            {/* Metadata */}
            {/* Description title ansd stuff */}
            <div className="col-span-1 px-2">
                <h1 className="font-bold text-4xl col-span-full mb-0">Tailwind version</h1>
                <p className="mt-0">Uploaded by <NavLink to="/">me</NavLink></p>
                <p id="description">Rumi and Jinu are embracing each other with their faces up against each other</p>
                <p className="mb-0">Source:</p>
                <p className="my-0"><Link to="#">Pinterest</Link></p>
                <p className="mt-0"><Link to="#">Instagram</Link></p>

                <div className="flex flex-wrap max-w-2xs gap-1">
                    <TailwindTag name="KPDH" />
                    <TailwindTag name="Rumi" />
                    <TailwindTag name="Jinu" />
                    <TailwindTag name="Lovers" />
                    <TailwindTag name="Demon" />
                    <TailwindTag name="Hugging" />
                    <TailwindTag name="Romantic" />
                </div>

            </div>
        </div>
    )
}

function OldDetails(){
    return <>
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
        {/* Figure out why the gap is weird */}
        {/* Figure out if i need max-w- at all for now I'll use the bootstrap values while I set everything else up*/}
        {/* max-w-[540px] md:max-w-2xl xl:max-w-7xl mx-auto */}
        {/* bg-emerald-400 sm:bg-red-500 md:bg-blue-800 lg:bg-amber-900 xl:bg-pink-500  */}
        <div className="
                        px-2 md:px-6 lg:px-10 xl:max-w-7xl mx-auto 
                        grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
                <TailwindPictures left={left} right={right} leftAlt="Left" rightAlt="Right" />        
            </div>
            {/* Metadata */}
            {/* Description title ansd stuff */}
            <div className="col-span-1 px-2">
                <h1 className="col-span-full mb-0">Tailwind version</h1>
                <p className="mt-0">Uploaded by <NavLink to="/">me</NavLink></p>
                <p id="description">Rumi and Jinu are embracing each other with their faces up against each other</p>
                <p className="mb-0">Source:</p>
                <p className="my-0"><Link to="#">Pinterest</Link></p>
                <p className="mt-0"><Link to="#">Instagram</Link></p>
                
                <div className="flex flex-wrap max-w-2xs gap-1">
                    <TailwindTag name="KPDH" />
                    <TailwindTag name="Rumi" />
                    <TailwindTag name="Jinu" />
                    <TailwindTag name="Lovers" />
                    <TailwindTag name="Demon" />
                    <TailwindTag name="Hugging" />
                    <TailwindTag name="Romantic" />
                </div>
                
            </div>
        </div>
    </>
}