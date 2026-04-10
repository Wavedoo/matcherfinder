import Pictures from "../components/Pictures";
import Tag from "../components/Tag"
import { Link, NavLink } from "react-router";

interface PreviewProps {
    title?: string,
    description?: string,
    leftImage?: File,
    rightImage?: File
}


export default function PreviewUpload({ title, description, leftImage, rightImage }: PreviewProps){
    return <div className="mx-auto m-5 p-2 border-2 rounded-lg grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1">
            {/* <Pictures left={leftImage} right={rightImage} leftAlt="Left" rightAlt="Right" /> */}
        </div>
        <h1 className="font-bold text-4xl col-span-full mb-0">{title}</h1>
        <p className="mt-0">Uploaded by <NavLink to="/">me</NavLink></p>
        <p id="description">{description}</p>
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
}