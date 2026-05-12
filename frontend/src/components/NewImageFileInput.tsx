import React, { useRef, useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import useLog from "../hooks/useLog";

interface ControlProps {
    id: string,
    label: string,
    /** Size limit in mb **/ 
    sizeLimit?: number
    required?: boolean,
    onFileChange: Dispatch<SetStateAction<File | undefined | null>>
}

export default function NewImageFileInput({ id, label, sizeLimit = 1, onFileChange, required = false }: ControlProps){

    // const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const selectedFile = e.target.files?.[0];
    //     if(!selectedFile) {
    //         setFile(null)
    //         return;
    //     }

    //     if(selectedFile.size > maxSize){
    //         useLog("Too big")
    //         setError("File cannot be larger than" + sizeLimit.toString() + " MB.")
    //         setFile(null)
    //         e.target.value = ""
    //         return
    //     }

    //     setFile(selectedFile)
    //     console.log("Selected file is now: " + file);
    // }
    // useLog("File is: " + file);

    const maxSize = sizeLimit * 1000 * 1000;
    const inputRef = useRef<HTMLInputElement>(null);


    const verifyFile = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if(!selectedFile) {
            onFileChange(null)
            return;
        }

        if(selectedFile.size > maxSize){
            onFileChange(null)
            alert("File too big.")
            useLog("File too big")
            return;
        }
        onFileChange(selectedFile)
        useLog("File changed to: " + selectedFile)
    }
    
    return (
        // TODO: Better styling
        <div 
            className="my-7 border-2 rounded-4xl px-5 pt-3 pb-5 flex flex-col hover:"
            onClick={() => inputRef.current?.click()}
        >
            <label htmlFor={id} className="text-xl pb-2">{label}</label>
            <input 
                className="w-full file:p-1 file:bg-blue-300 file:border file:rounded-md"
                type="file"
                accept="image/gif, image/jpeg, image/png"
                ref={inputRef}
                onChange={(e) => verifyFile(e)}
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