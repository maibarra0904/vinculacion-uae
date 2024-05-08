'use client'
import { useEffect, useState } from "react"
import CategoryIcon from "../ui/CategoryIcon"
import Logo from "../ui/Logo"



const OrderSidebar = () => {

    const [path, setPath] = useState('')

    useEffect(() => {
        setPath(window.location.pathname)
    },[])

    const categories = [
        {
            id: 1,
            name: "Labores Comunitarias",
            slug: "labor"
        },
        {
            id: 2,
            name: "Practicas Preprofesionales",
            slug: "practica"
        },
        {
            id: 3,
            name: 'Desglose (Egresados)',
            slug: "desglose"
        }
    ]


  return (
    <aside className="pt-5 md:w-72 md:h-screen bg-white">

        <Logo />
        <p className="flex justify-center items-center font-bold text-indigo-800">Universidad Agraria del Ecuador</p>
        <p className="flex justify-center items-center font-bold text-indigo-800">Vinculación - Computación</p>
        <p className="flex justify-center items-center font-bold text-indigo-800">Milagro</p>
        <nav className="mt-10">
            {
                categories.map(category => (
                    <CategoryIcon 
                        key={category.id}
                        category={category}
                        path={path}
                    />
                ))
            }
        </nav>
    </aside>
  )
}

export default OrderSidebar