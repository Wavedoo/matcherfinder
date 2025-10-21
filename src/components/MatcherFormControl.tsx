import { Form } from "react-bootstrap"

interface FormControlProps {
    controlId: string,
    label: string,
    type: string

}
export default function MatcherFormGroup({controlId, label, type}: FormControlProps){
    return (
        <Form.Group className="my-3" controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            {/* or type=email */}
            <Form.Control type={type}/>
        </Form.Group>
    )
}