import left from "../images/left.jpg"
import right from "../images/right.jpg"
import Pictures from "../components/Pictures";
import Tag from "../components/Tag"
import { Link, NavLink } from "react-router";

export default function Details() {
    return (
        // Look into getting rid of width constraints, for now I set up the cooler functionality and stop worrying about pixels
        <div className="
                       px-2 md:px-6 lg:px-10 xl:max-w-7xl mx-auto 
                        grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
                <Pictures left={left} right={right} leftAlt="Left" rightAlt="Right" />
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
                    <Tag name="KPDH" />
                    <Tag name="Rumi" />
                    <Tag name="Jinu" />
                    <Tag name="Lovers" />
                    <Tag name="Demon" />
                    <Tag name="Hugging" />
                    <Tag name="Romantic" />
                </div>

            </div>
        </div>
    )
}
