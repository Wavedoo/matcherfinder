import { useState } from "react";

export default function useFileInput(){
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    
}