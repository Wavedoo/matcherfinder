import Pictures from "../components/Pictures"
import left from "../images/left.jpg"
import right from "../images/right.jpg"
import useLog from "../hooks/useLog"
export default function TerribleHome(){
    useLog("log test")
    return <div className="h-6/12">
        <Pictures left={left} right={right} leftAlt="Left" rightAlt="Right" link="/matching" clickable/>
    </div>
}