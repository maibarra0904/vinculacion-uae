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
        }
    ]


  return (
    <aside className="md:w-72 md:h-screen bg-white">

        <Logo />
        <p className="flex justify-center items-center text-green-500">Universidad Agraria del Ecuador</p>
        <p className="flex justify-center items-center text-green-500">Vinculación - Computación</p>
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