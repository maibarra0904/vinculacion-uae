import OrderSidebar from "@/components/order/OrderSidebar";

export default function Home({children}) {


  return (
    <div className="md:flex">
            
            <OrderSidebar />

            <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                {children}
            </main>

            
      </div>
  );
}
