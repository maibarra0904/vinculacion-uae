import React from 'react'

const Alerta = ({msg, err=true}) => {
    return (
        <div className="flex justify-center items-center">
            <div className={`flex justify-center items-center p-2  text-white mb-5 w-96 rounded-lg uppercase ${err ?"bg-red-500":'bg-green-500'}`}>
                {msg}
            </div>
        </div>
    )
}

export default Alerta