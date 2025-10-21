import { Container } from "react-bootstrap"
import Pictures from "../components/Pictures"
import left from "../images/left.jpg"
import right from "../images/right.jpg"
export default function TerribleHome(){
    return <Container>
        <Pictures left={left} right={right} leftAlt="Left" rightAlt="Right" link="/matching" clickable/>
    </Container>
}