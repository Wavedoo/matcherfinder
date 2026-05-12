import { useRef, type Dispatch, type SetStateAction } from "react"
import type React from "react"

interface TextareaProps {
    id: string,
    label: string,
    maxLength?: number,
    required?: boolean,
    text: string,
    onTextChange: Dispatch<SetStateAction<string>>
}

export default function TextArea({ id, label, text, onTextChange, maxLength = 1000, required = false }: TextareaProps){
    const inputRef = useRef<HTMLTextAreaElement>(null);
    return (
        <div className="border-2 rounded-4xl px-5 pt-3 pb-5 hover:cursor-text flex flex-col"
        onClick={() => inputRef.current?.focus()}>
            <label htmlFor={id} className="text-xl pb-1">{label}</label>
            <textarea
                className="w-full outline-0"
                value={text}
                ref={inputRef}
                maxLength={maxLength}
                rows={6}
                onChange={(e) => onTextChange(e.target.value)}
            />
        </div>
    )
}