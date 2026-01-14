import React, { useState } from "react";
import useLog from "../hooks/useLog";

interface ControlProps {
    id: string,
    label: string,
    /** Size limit in mb **/ 
    sizeLimit?: number
    lengthLimit?: number,
    required?: boolean
}

export default function ImageFileInput({ id, label, sizeLimit = 10, lengthLimit = 4000, required = false }: ControlProps){
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
            useLog("Too big")
            setError("File cannot be larger than" + sizeLimit.toString() + " MB.")
            setFile(null)
            e.target.value = ""
            return
        }

        setFile(selectedFile)
    }
    useLog("File is: " + file);
    return (
        // TODO: Better styling
        <div className="my-3">
            <label htmlFor={id}>{label}</label>
            <input 
                className="border-2 w-full rounded-md file:p-1 file:bg-blue-300 file:border file:rounded-md"
                type="file"
                accept="image/gif, image/jpeg, image/png"
                onChange={onFileChange}
                required = {required}
            />
        </div>
        // <Form.Group className="my-3" controlId={controlId}>
        //     <Form.Label>{label}</Form.Label>
        //     {/* or type=email */}
        //     <Form.Control 
        //         type="file" 
        //         accept="image/gif, image/jpeg, image/png"
        //         onChange={onFileChange}
        //         required
        //     />
        // </Form.Group>
    )
}