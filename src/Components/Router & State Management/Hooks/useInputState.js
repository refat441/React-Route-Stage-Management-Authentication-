import { useState } from "react"

const useInputstate = (defaultvalue = null) =>{
    const [value, setvalue] = useState(defaultvalue)

    const OnChange = e =>{
        setvalue(e.target.value);
    }
    // const handleChange = e =>{
    //     setvalue(e.target.value);
    // }
    // return [value, handleChange]
    return{
        value, OnChange
    }

}

export default useInputstate;