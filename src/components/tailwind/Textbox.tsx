interface TextboxProps {
    id: string,
    label: string,
    required?: boolean
}

export default function Textbox({id, label, required = false }: TextboxProps){
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input className="border-2 w-full rounded-md file:p-1 file:bg-blue-300 file:border file:rounded-md"
                type="text"
                required = {required}
            />
        </>
    )
}