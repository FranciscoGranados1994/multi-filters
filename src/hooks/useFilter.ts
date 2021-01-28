import { useState } from "react"

export function useFilter(){
    const [activeFilter, setFilter] = useState<boolean>(false)


    return {
        activeFilter,
        setFilter
    }
}

