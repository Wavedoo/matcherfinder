import UploadTag from "./UploadTag"

interface TagAdderProps {
    id: string,
    label: string,
    required?: boolean
}


export default function TagAdder({ id, label, required = false }: TagAdderProps){
    return <>
        <label>{label}</label>
        <div className="border-2 rounded-md w-full">
            <div id="tags">
                <UploadTag name="Test"/>
            </div>
            <input 
                className="border rounded-md w-full"
                type="text"
            />
        </div>
        
    </>
}