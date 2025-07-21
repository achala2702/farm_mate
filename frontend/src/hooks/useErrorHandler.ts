"use client";

import { useState } from "react";

export default function useErrorHandler(){
    const [error, setError] = useState<String|null>(null)

    const handleError=(msg:String)=>{
        setError(msg);

        setTimeout(()=>(setError(null)), 10000);
    }

    return {error, setError:handleError};
}