import React from 'react'

const EnlacesRelacionados = ({children, text="Enlaces asociados al contenido"}) => {
    return (
        <div className="flex flex-col justify-start items-start mt-4">
            <span className="text-red-600 underline font-bold mb-2">{text}</span>

            {children}
        </div>
    )
}

export default EnlacesRelacionados