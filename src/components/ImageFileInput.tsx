import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface ControlProps {
    controlId: string,
    label: string,
    /** Size limit in mb **/ 
    sizeLimit?: number
    lengthLimit?: number
}

export default function ImageFileInput({ controlId, label, sizeLimit = 10, lengthLimit = 4000 }: ControlProps){
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const maxSize = sizeLimit  * 1000;

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if(!selectedFile) {
            setFile(null)
            return;
        }

        if(selectedFile.size > maxSize){
            console.log("Too big")
            setError("File cannot be larger than" + sizeLimit.toString() + " MB.")
            setFile(null)
            e.target.value = ""
            return
        }

        setFile(selectedFile)
    }
    console.log("File is: " + file);
    return (
        <Form.Group className="my-3" controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            {/* or type=email */}
            <Form.Control 
                type="file" 
                accept="image/gif, image/jpeg, image/png"
                onChange={onFileChange}
                required
            />
        </Form.Group>
    )
}