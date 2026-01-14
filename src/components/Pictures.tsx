import Picture from "./Picture"

interface PicturesProps {
    left: string,
    right: string,
    leftAlt: string,
    rightAlt: string,
    link?: string
    clickable?: boolean
}

// How to add clickable Boolean
export default function Pictures({ left, right, leftAlt, rightAlt, link, clickable }: PicturesProps) {
    const images = <div className="grid grid-rows-1 grid-cols-2 gap-1 w-fit">
        <Picture src={left} alt={leftAlt}/>
        <Picture src={right} alt={rightAlt}/>
    </div>


    return clickable ? <a href={link}>{images}</a> : images
}

/* // How to add clickable Boolean
export default function Pictures({left, right, leftAlt, rightAlt}: PicturesProps){
    const stackTest = <Stack direction="horizontal" gap={1} className="w-50">
        <Picture src={left} alt={leftAlt}></Picture>
        <Picture src={right} alt={rightAlt}></Picture>
    </Stack>
    return true ? <a href="">{stackTest}</a> : { stackTest }
} */

/*
// How to add clickable Boolean
export default function Pictures({left, right, leftAlt ="", rightAlt="", clickable}: PicturesProps){
    return <Stack direction="horizontal" gap={1} className="w-50">
            <Picture src={left} alt={leftAlt}></Picture>
            <Picture src={right} alt={rightAlt}></Picture>
    </Stack>
} */