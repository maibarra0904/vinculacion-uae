'use client'
import MyContext from "../context/myContext"
import OrderSidebar from "../order/OrderSidebar"
import { useEffect, useState } from "react"


const Layout = ({ children }) => {

    const isClient = typeof window !== 'undefined';

    const [auth, setAuth] = useState({})

    const [confirmed, setConfirmed] = useState(false)

    const [loadPage, setLoadPage] = useState(true)

    useEffect(() => {
        setAuth(isClient ? JSON.parse(localStorage.getItem("usuario")) || {} : {})
        setConfirmed(isClient ? JSON.parse(localStorage.getItem("confirmed")) || false : false)
        setLoadPage(false)
    },[])

    return (
        <MyContext.Provider value={{ auth, setAuth, confirmed, setConfirmed, loadPage, setLoadPage }}>
        <div className="md:flex">
            
            
            <OrderSidebar />
            
            
            <div className="p-5 md:flex-1 md:h-screen md:overflow-y-scroll">
                {children}
            </div>
        </div>
        </MyContext.Provider>
    )
}

export default Layout