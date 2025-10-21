import { Button } from "react-bootstrap";

// TODO: Add href?
export default function Tag({name}: {name: string}){
    return <Button variant="outline-primary" size="sm" className="rounded rounded-pill">{name}</Button>

}