import React, { useRef, useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import useLog from "../hooks/useLog";

interface NewControlProps {
    id: string,
    label: string,
    /** Size limit in mb **/ 
    sizeLimit?: number
    onLeftChange: Dispatch<SetStateAction<File | undefined | null>>,
    onRightChange: Dispatch<SetStateAction<File | undefined | null>>
}


export default function DisplayImageFileInput({ id, label, sizeLimit = 1, onLeftChange, onRightChange }: NewControlProps){
    const maxSize = sizeLimit * 1000 * 1000;
    const leftRef = useRef<HTMLInputElement>(null);
    const rightRef = useRef<HTMLInputElement>(null);
    const [leftUrl, setLeftUrl] = useState<string>("src/temp/default.png")
    const [righttUrl, setRightUrl] = useState<string>("src/temp/default.png")



    const verifyFile = (e: ChangeEvent<HTMLInputElement>, fileChange: Dispatch<SetStateAction<File | undefined | null>>, setUrl: Dispatch<React.SetStateAction<string>>) => {
        const selectedFile = e.target.files?.[0];
        if(!selectedFile) {
            fileChange(null)
            setUrl("src/temp/default.png")
            return;
        }

        if(selectedFile.size > maxSize){
            fileChange(null)
            alert("File too big.")
            useLog("File too big")
            setUrl("src/temp/default.png")
            return;
        }
        setUrl(URL.createObjectURL(selectedFile))
        fileChange(selectedFile)
        console.log("hi")
        // useLog("File changed to: " + selectedFile)
    }
    
    return (
        // TODO: Better styling
        <div 
            className="my-7 border-2 rounded-4xl px-5 pt-3 pb-5 flex flex-col"
        >
            <label htmlFor={id} className="text-xl pb-2">{label}</label>
            
            <div className="flex justify-center gap-2 max-h-96">
                {/* Left image */}
                <div className="aspect-square min-w-0 ">
                    <input
                        className="hidden"
                        type="file"
                        accept="image/gif, image/jpeg, image/png"
                        ref={leftRef}
                        onChange={(e) => verifyFile(e, onLeftChange, setLeftUrl)}
                        required={true}
                    />
                    <img className="rounded-md w-full h-full object-cover border" src={leftUrl} onClick={() => leftRef.current?.click()} />
                </div>



                {/* Right image */}
                <div className="aspect-square min-w-0">
                    <input
                        className="hidden"
                        type="file"
                        accept="image/gif, image/jpeg, image/png"
                        ref={rightRef}
                        onChange={(e) => verifyFile(e, onRightChange, setRightUrl)}
                        required={true}
                    />
                    <img className="rounded-md w-full h-full object-cover border" src={righttUrl} onClick={() => rightRef.current?.click()} />
                </div>
            </div>
        </div>
    )
}