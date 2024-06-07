'use client'
import { useEffect, useState } from "react"
import CategoryIcon from "../ui/CategoryIcon"
import Logo from "../ui/Logo"
import BarNav from "../ui/BarNav"
import LogOptions from "../ui/LogOptions"
import { useMyContext } from "../context/myContext"



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
        <aside className="pt-5 pb-2 md:w-72 md:h-screen bg-white">
            <Logo />
            <p className="flex justify-center items-center font-bold text-indigo-800">Universidad Agraria del Ecuador</p>
            <p className="flex justify-center items-center font-bold text-indigo-800">Vinculación - Computación</p>
            <p className="flex justify-center items-center font-bold text-indigo-800">Milagro</p>
                
            {/* <LogOptions />             */}

            {
                windowSize.width < 768 ?
                    <>
                        <div
                            className={`${showNavBar?'ml-4 mr-4 mt-4':'m-4'} flex flex-col justify-center items-center border border-gray-200 hover:cursor-pointer`}
                            onClick={handleShow}
                        >
                            <div className={`m-1`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                </svg>
                            </div>



                        </div>

                        {
                            showNavBar===true &&
                            <div
                                className={`${showNavBar?'ml-4 mr-4 mt-0 mb-4 transition duration-500':'m-4'} justify-center items-center hover:cursor-pointer border border-gray-200`}
                            >
                                <BarNav path={path} showNavBar={showNavBar}/>
                            </div>
                        }

                    </>
                    :
                    <BarNav path={path} />
            }

        </aside>
    )
}

export default OrderSidebar