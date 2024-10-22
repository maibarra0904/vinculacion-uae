'use client'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react"
import { useMyContext } from "../context/myContext"
import Alerta from "./Alerta"
import { enterKey } from "@/utils/enterKey"
import Regresar from "./Regresar";


const Tema = () => {


    const [tema, guardaTema] = useState('')

    const [beneficiarios, setBeneficiarios] = useState('');

    const [lugar, guardaLugar] = useState('')

    const { auth, setAuth } = useMyContext()

    const [alerta, setAlerta] = useState('')

    const [loading, setLoading] = useState('')

    const [puntos, setPuntos] = useState(0);

    const [output, setOutput] = useState('');

    const apiKey = process.env.NEXT_PUBLIC_API_GEMINI_KEY
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    useEffect(() => {
        // Iniciar el intervalo
        const intervalId = setInterval(() => {
            setPuntos((prev) => (prev + 1) % 4); // Alterna entre 0, 1, 2 y 3 puntos
        }, 500); // Actualiza cada 500 ms

        // Limpieza al desmontar el componente
        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        if (auth?.nombre) {
            window.history.back()
        }
    }, [auth])



    const handleChangeTema = (e) => {
        guardaTema(e.target.value)
    }
    const handleChangeLugar = (e) => {
        guardaLugar(e.target.value)
    }
    const handleChangeBeneficiarios = (e) => {
        setBeneficiarios(e.target.value)
    }

    const handleSubmit = async () => {

        if (tema === '' || lugar === '') {
            setAlerta({ msg: 'Todos los campos son obligatorios' })
            setTimeout(() => {
                setAlerta({})
            }, 2000);
            return
        }

        setLoading(true)

        const result = await model.generateContent('Muestra una idea de tema de capacitación que contenga sin excepción todas las siguientes temáticas: ' + tema + ' incluyendo el siguiente lugar donde se realizará el proyecto:' + lugar + ' y también el hecho que la capacitación está dirigida a: ' + beneficiarios + ', por ultimo la ideas debe decir qué se va a hacer y para qué se va a hacer en el mismo tema, quita comillas, asteriscos, dos puntos u otros simbolos especiales y dedicate solo a mostrar el tema en un solo parrafo y ninguna cosa mas');
        const response = await result.response;
        setLoading(false)
        setOutput(response.text());

    };

    return (

        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="mb-5 font-bold">App: Idea de Tema de Proyecto</h1>
                {
                    alerta?.msg &&
                    <Alerta msg={alerta?.msg} />
                }
                <form
                    className="min-w-70 bg-amber-200 p-5 rounded-lg m-2 md:w-96"
                >
                    <div>


                        <div className="mb-4">
                            <label className="text-gray-800" htmlFor="email">
                                Temática:
                            </label>
                            <input
                                id="tema"
                                type="text"
                                className="mt-2 text-gray-800 block w-full p-3 bg-gray-50"
                                placeholder="Ej: Word, Excel, Correo electrónico, etc."
                                name="tema"
                                value={tema}
                                onChange={handleChangeTema}
                                onKeyDown={(event) => enterKey(event, "generarButton")}
                            //maxLength={30}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-800" htmlFor="password">
                                Lugar:
                            </label>
                            <input
                                id="lugar"
                                type="lugar"
                                className="mt-2 text-gray-800 block w-full p-3 bg-gray-50"
                                placeholder="Nombre de empresa u organización"
                                name="lugar"
                                value={lugar}
                                onChange={handleChangeLugar}
                                maxLength={30}
                                onKeyDown={(event) => enterKey(event, "generarButton")}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-800" htmlFor="password">
                                Beneficiarios:
                            </label>
                            <input
                                id="beneficiarios"
                                type="beneficiarios"
                                className="mt-2 text-gray-800 block w-full p-3 bg-gray-50"
                                placeholder="Ej. Docentes, pobladores, estudiantes, etc."
                                name="beneficiarios"
                                value={beneficiarios}
                                onChange={handleChangeBeneficiarios}
                                maxLength={30}
                                onKeyDown={(event) => enterKey(event, "generarButton")}
                            />
                        </div>

                        <div className="flex">
                            <button
                                type="button"
                                id="generarButton"
                                className="flex justify-center items-center mt-2 w-full p-3 bg-gray-500 text-white"
                                onClick={handleSubmit}
                            >{loading ? `Generando${'.'.repeat(puntos)}` : 'Generar Idea'}</button>
                        </div>

                        <p className="mt-2 text-indigo-500">Pd.- Puedes generar varias ideas si deseas</p>

                    </div>
                </form>

                <form
                    className="min-w-70 bg-indigo-200 p-5 rounded-lg m-2 md:w-96"
                >
                    <div>


                        <div className="flex flex-col mb-4">
                            <label className="text-gray-800" htmlFor="email">
                                Idea:
                            </label>
                            <input
                                type="text"
                                value={output}
                                readOnly
                                className="border border-gray-300 rounded-md p-2 bg-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                                rows={1} // Comienza con una sola fila
                                placeholder="Aquí se presentará la idea..."
                                style={{ height: `200px` }} // Ajusta la altura según el texto
                            />
                        </div>


                    </div>
                </form>
            </div>



        </>
    )
}

export default Tema