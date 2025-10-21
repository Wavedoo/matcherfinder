import { Col, Row, Stack } from "react-bootstrap"
import Picture from "./Picture"

interface PicturesProps{
    left: string,
    right: string,
    leftAlt: string,
    rightAlt: string,
    link?: string
    clickable?: boolean
}

// How to add clickable Boolean
export default function Pictures({left, right, leftAlt, rightAlt, link, clickable}: PicturesProps){
    const stack = 
        <Stack direction="horizontal" gap={1} className="w-50">
            <Picture src={left} alt={leftAlt}></Picture>
            <Picture src={right} alt={rightAlt}></Picture>
        </Stack>

    return clickable ? <a href={link}>{stack}</a> : stack
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