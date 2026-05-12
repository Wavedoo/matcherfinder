import { useEffect } from "react"

export default function useLog(message: string){
    useEffect(() => {
        console.log(message)
    }, [])

}