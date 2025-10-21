import { Image } from "react-bootstrap"

interface PictureProps{
    src: string,
    alt: string,
    onClick?:  () => void
}
export default function Picture({src, alt = "matching image", onClick}: PictureProps){
    return (
        // <img src={src} alt={alt} className="px-1" style={{maxHeight: "260px", maxWidth: "260px", minHeight: "130px", minWidth: "130px"}}/>
        // <Image src={src} alt={alt} className="p-0 my-2 img-fluid" /* style={{maxHeight: "260px", maxWidth: "260px", minHeight: "130px", minWidth: "130px"}} */ rounded/>
        // TODO: Make it so the gap is clickable?
        <Image src={src} alt={alt} className="p-0 my-2 img-fluid" onClick={onClick} rounded/>

    )
}