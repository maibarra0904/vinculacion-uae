import OrderSidebar from "@/components/order/OrderSidebar";
import { redirect } from 'next/navigation';

export default function Home({children}) {

  redirect('/general', 'push'); 

  return (
    <div className="md:flex">
            
            <OrderSidebar />

            <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                {children}
            </main>

            
      </div>
  );
}
