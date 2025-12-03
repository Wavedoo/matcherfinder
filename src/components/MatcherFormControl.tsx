import { Form } from "react-bootstrap"

interface FormControlProps {
    controlId: string,
    label: string,
    type: string,
    required?: boolean
}

export default function MatcherFormGroup({controlId, label, type, required = false}: FormControlProps){
    return (
        <Form.Group className="my-3" controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            {/* or type=email */}
            <Form.Control type={type}/>
        </Form.Group>
    )
}