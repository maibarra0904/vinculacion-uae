import OrderSidebar from "@/components/order/OrderSidebar";
import { redirect } from 'next/navigation';

export default function Home({children}) {


  redirect('/general', 'push'); 

  return (

            <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
              <div className="md:flex">
              <OrderSidebar />
                {children}
                </div>
            </main>

    
  );
}
