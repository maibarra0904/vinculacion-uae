'use client'
import { useEffect, useState } from "react"
import CategoryIcon from "../ui/CategoryIcon"
import Logo from "../ui/Logo"
import BarNav from "../ui/BarNav"
import LogOptions from "../ui/LogOptions"
import { useMyContext } from "../context/myContext"
import Breadcrumbs from "../ui/Breadcrumbs"



const OrderSidebar = () => {

    const { auth, setAuth } = useMyContext()
    const [path, setPath] = useState('')

    const [showNavBar, setShowNavBar] = useState(false)

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {

        if (typeof window !== 'undefined') {
            const show = JSON.parse(localStorage.getItem('showNavBar')) || false;
            setShowNavBar(show)
        }

        setPath(window.location.pathname)


        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        handleResize()

        window.addEventListener("resize", handleResize);
        // Limpia el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    const handleShow = () => {
        const showState = !showNavBar
        console.log(showState)
        setShowNavBar(showState)
        localStorage.setItem('showNavBar', showState)
    }

    return (
        <aside className="pt-6 pb-4 md:w-72 md:h-screen md:overflow-y-auto bg-white dark:bg-gray-950 border-r border-gray-200/60 dark:border-gray-800 flex flex-col shadow-lg shadow-slate-900/5 dark:shadow-none z-10">
            <div className="px-4 mb-4">
                <Breadcrumbs />
            </div>
            <div className="flex flex-col items-center">
                <Logo image='/logo.jpg'/>
                <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-200 text-sm mt-3">Universidad Agraria del Ecuador</p>
                <p className="font-bold text-gray-600 dark:text-gray-400 text-xs text-center mt-1">Vinculación y Computación</p>
                <p className="font-semibold text-gray-500 dark:text-gray-500 text-xs">Milagro</p>
            </div>

            {windowSize.width >= 768 && (
                <>
                    <div className="border-b border-gray-100 dark:border-gray-800 my-4"></div>
                    <LogOptions />
                    <div className="border-b border-gray-100 dark:border-gray-800 my-4"></div>
                </>
            )}

            {
                windowSize.width < 768 ?
                    <div className="px-2 mt-2">
                        <LogOptions />
                    </div>
                    :
                    <BarNav path={path} />
            }
        </aside>
    )
}

export default OrderSidebar