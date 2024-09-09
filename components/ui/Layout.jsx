'use client'
import MyContext from "../context/myContext"
import OrderSidebar from "../order/OrderSidebar"
import { useEffect, useState } from "react"
import Modal from "./Modal"


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

                        <h1 className="flex justify-center mt-2 mb-4 uppercase text-amber-500">Comunicado!</h1>
                        <h2 className="text-indigo-500">La emisión de números de oficios quedarán inhabilitados temporalmente desde el <span className="font-bold">07/09/2024</span> hasta el <span className="font-bold">16/09/2024</span></h2>

                    </Modal>
                }


                <OrderSidebar />


                <div className="p-5 md:flex-1 md:h-screen md:overflow-y-scroll">
                    {children}
                </div>
            </div>
        </MyContext.Provider>
    )
}

export default Layout