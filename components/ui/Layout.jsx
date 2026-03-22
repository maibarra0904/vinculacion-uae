'use client'
import MyContext from "../context/myContext"
import OrderSidebar from "../order/OrderSidebar"
import { useEffect, useState } from "react"
import Modal from "./Modal"
import Breadcrumbs from "./Breadcrumbs"


const Layout = ({ children }) => {

    const isClient = typeof window !== 'undefined';


    const [auth, setAuth] = useState({})

    const [confirmed, setConfirmed] = useState(false)

    const [viewModal, setViewModal] = useState(true)

    const [loadPage, setLoadPage] = useState(true)

    const [isModalOpen, setIsModalOpen] = useState(true);

    //const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false)
        localStorage.setItem('view', JSON.stringify(true))
    }

    useEffect(() => {

        setAuth(isClient ? JSON.parse(localStorage.getItem("usuario")) || {} : {})
        setConfirmed(isClient ? JSON.parse(localStorage.getItem("confirmed")) || false : false)
        setViewModal(isClient ? JSON.parse(localStorage.getItem("view")) || false : false)
        setLoadPage(false)

    }, [])

    return (
        <MyContext.Provider value={{ auth, setAuth, confirmed, setConfirmed, loadPage, setLoadPage }}>
            <div className="md:flex">
                {
                    !viewModal &&
                    <Modal isOpen={isModalOpen} onClose={closeModal}>

                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.3} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-black text-gray-800 dark:text-gray-100 mb-1">¡Plataforma Actualizada!</h2>
                            <p className="text-xs text-gray-400 text-center mb-5">Nueva interfaz de Vinculación UAE</p>

                            <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/40 text-center w-full space-y-3">
                                <p className="text-gray-800 dark:text-gray-200 text-sm font-bold">
                                    Bienvenido a la renovación visual
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                                    Se ha actualizado la interfaz para ofrecerte una experiencia más moderna y minimalista. <span className="font-bold text-gray-800 dark:text-gray-100">De momento, los procedimientos y flujos siguen siendo exactamente los mismos</span>.
                                </p>
                            </div>

                            <button onClick={closeModal} className="w-full mt-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/10 active:scale-95 transition-all text-sm">
                                Entendido
                            </button>
                        </div>
                    </Modal>
                }


                <OrderSidebar />


                <div className="p-5 md:flex-1 md:h-screen md:overflow-y-scroll">
                    <div className="max-w-6xl mx-auto w-full">
                        <Breadcrumbs />
                        {children}
                    </div>
                </div>
            </div>
        </MyContext.Provider>
    )
}

export default Layout