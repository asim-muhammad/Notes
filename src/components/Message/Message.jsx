import { useState } from "react"

export default function Message({className = "", text = ""}){

    const[visible, setVisible] = useState(true);

    return (
        <>
            {
                visible && <div className={`
                    w-full max-w-96 min-h-10
                    border border-[#343434] flex items-center py-3 px-4  
                    bg-black   
                    ${className}`}>
                
                    <span className="mr-4">
                        {text}
                    </span>
        
                    <button className="text-blue-400 ml-auto hover:text-blue-300"
                            onClick={()=> setVisible(false)}
                    >close</button>
                </div>
            }
        </>
    )
}