import OrderSidebar from "../order/OrderSidebar"


const Layout = ({ children }) => {
    return (
        <div className="md:flex">
            <OrderSidebar />

            <main className="p-5 md:flex-1 md:h-screen md:overflow-y-scroll">
                {children}
            </main>
        </div>
    )
}

export default Layout