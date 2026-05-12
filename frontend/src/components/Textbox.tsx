import { useRef, type Dispatch, type SetStateAction } from "react"
import type React from "react"

interface TextboxProps {
    id: string,
    label: string,
    maxLength?: number,
    required?: boolean,
    text: string,
    onTextChange: Dispatch<SetStateAction<string>>
}

export default function Textbox({ id, label, text, onTextChange, maxLength = 524288, required = false }: TextboxProps){
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="border-2 rounded-4xl px-5 pt-3 pb-5 hover:cursor-text flex flex-col"
        onClick={() => inputRef.current?.focus()}>
            <label htmlFor={id} className="text-xl pb-1">{label}</label>
            <input 
                // className="border-2 w-full rounded-md "
                className="w-full outline-0"
                type="text"
                value={text}
                ref={inputRef}
                required = {required}
                maxLength={maxLength}
                onChange={(e) => onTextChange(e.target.value)}
            />
        </div>
    )
}