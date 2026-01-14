import { Container } from "react-bootstrap"
import Pictures from "../components/tailwind/Pictures"
import left from "../images/left.jpg"
import right from "../images/right.jpg"
import useLog from "../hooks/useLog"
export default function TerribleHome(){
    useLog("log test")
    return <Container>
        <Pictures left={left} right={right} leftAlt="Left" rightAlt="Right" link="/matching" clickable/>
    </Container>
}