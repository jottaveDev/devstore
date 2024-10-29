import { ReactNode } from 'react'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '../components/header'
import { CartProvider } from '../contexts/cart-context'

const StoreLayout = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider>
      <div className="relative mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
        <Header />
        {children}
        <ToastContainer
          position="top-right"
          toastStyle={{ top: 70 }}
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </CartProvider>
  )
}

export default StoreLayout
