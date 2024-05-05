import React from 'react'

const EnlacesRelacionados = ({children}) => {
    return (
        <div className="flex flex-col justify-start items-start">
            <span className="text-red-600 underline font-bold mb-2">Enlaces Relacionados</span>

            {children}
        </div>
    )
}

export default EnlacesRelacionados